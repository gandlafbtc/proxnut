import { serveListener } from "https://deno.land/std@0.189.0/http/server.ts";
import {
  CashuMint,
  CashuWallet,
  getDecodedToken,
  getEncodedToken,
  Token
} from "npm:@cashu/cashu-ts@0.8.0-rc.4";
import { CONFIG } from "../bun/config.ts";

const listener = Deno.listen({ port: 4505 });

console.log("server listening on http://localhost:4505");

await serveListener(listener, async (request) => {
  try {
    const { host, path, fee: hostFee } = createUrl(request.url);
    const { to: serviceRoute, fee: routeFee } = lookupRoute(path);
    const fee = hostFee + routeFee;
    if (fee) {
      console.log('resource has a fee')
      await collectFee(fee, request.headers.get("X-Cashu") ?? "");
    }
    return await fetch(host + serviceRoute, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
  } catch (error) {
    console.error(error);
    return new Response(error, { status: 500 });
  }
});

function createUrl(url: string): { host: string; path: string; fee: number } {
  const { protocol, host, port, path } = splitUrl(url);
  const serviceHost = lookupHost(host, port);
  if (!serviceHost) {
    throw new Error("host is not defined");
  }
  return { host: `http://${serviceHost.to}`, path, fee: serviceHost.fee };
}

function splitUrl(
  url: string,
): { protocol: string; host: string; port: string; path: string } {
  const parsedUrl = new URL(url);
  const protocol = parsedUrl.protocol;
  const host = parsedUrl.hostname;
  const port = parsedUrl.port;
  const path = parsedUrl.pathname;

  return { protocol, host, port, path };
}

function lookupHost(host: string, port: string): { to: string; fee: number } {
  const key = `${host}${port ? ":" + port : ""}`;
  return CONFIG.HOST_MAP[key];
}

function lookupRoute(path: string): { to: string; fee: number } {
  return CONFIG.ROUTE_MAP[path];
}

async function collectFee(fee: number, token: string): Promise<number> {
  if (!token) {
    throw new Error("No token found in X-Cashu header");
  }
  const collectedFee = await claimToken(token)
  if (collectedFee<fee) {
    throw new Error("Token in X-Cashu did not yield enough");
  }
  return collectedFee
}


async function claimToken(token: string): Promise<number> {
  let t
  try {
     t = getDecodedToken(token);
  } catch (error) {
    throw new Error(error)
  }
  if (!t) {
    return 0;
  }
  const filteredTokenEntries = t.token?.filter((tkn) =>
    CONFIG.ALLOWED_MINTS.includes(tkn.mint)
  );
  if (
    !filteredTokenEntries.map(
      (tkn) => tkn.proofs,
    ).flat().length
  ) {
    return 0;
  }
  const amountReceived = await receiveTokens({token: filteredTokenEntries})
  
  return amountReceived;
}

async function receiveTokens(token: Token) : Promise<number> {

  const baseMint = token.token[0].mint
  
  const mint  = new CashuMint(baseMint)
  
  const wallet = new CashuWallet(mint)
  
  console.log(token)
  try {
    const {token: receivedToken} = await wallet.receive(getEncodedToken(token))
    console.log("yo")
    return receivedToken.token.map(
      (tkn) => tkn.proofs,
      ).flat().reduce((curr, val) => curr+val.amount, 0)
    } catch (error) {
      console.error(error)
      throw new Error("error receiving tokens");
    }
}
