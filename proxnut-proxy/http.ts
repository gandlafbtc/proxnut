import { CashuMint, CashuWallet, Token, getDecodedToken, getEncodedToken } from "@cashu/cashu-ts";

import { Elysia } from 'elysia'
import cors from "@elysiajs/cors";
import { getConfig } from "./redis";

export const initializeHTTP = () => {
new Elysia().onStart((()=>{console.log('listening on port 3003')})
).use(cors())
    .get('*', async ({request}) =>  
  {
      try {
        console.log('request: ', request.url)
        const { host, path, fee: hostFee } = await createUrl(request.url);
        const routePath = await lookupRoute(path)
        if (!routePath) {
          return await fetch(host + path, {
            method: request.method,
            headers: request.headers,
            body: request.body,
          })
        }
        const { to: serviceRoute, fee: routeFee } = routePath;
        const fee = hostFee + routeFee;
        if (fee) {
          console.log('resource has a fee')
          await collectFee(fee, request.headers.get("X-Cashu") ?? "");
        }

        const response = await fetch(host + serviceRoute, {
          method: request.method,
          headers: request.headers,
          body: request.body,
        })

        return response
      } catch (error) {
        console.error(error);
        const response = new Response(error, { status: 500 });
        return response
      }
    },

  ).listen(3003)
  }
 

async function createUrl(url: string): Promise<{ host: string; path: string; fee: number }> {
  const { protocol, host, port, path } = splitUrl(url);
  const serviceHost = await lookupHost(host, port);
  console.log('create url: ', serviceHost)
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

async function lookupHost(host: string, port: string): Promise<{ to: string; fee: number }> {
  const key = `${host}${port ? ":" + port : ""}`;
  
  const config = await getConfig()
  if (!config.HOST_MAP) {
    throw new Error("no hosts configured");
  }
  const toNFee = config.HOST_MAP.find(h=> h.from===key);
  if (!toNFee) {
    throw new Error("host is not mapped");
  }
  return {to: toNFee?.to, fee: toNFee?.fee}
}

async function lookupRoute(path: string): Promise<{ to: string; fee: number }> {
  const config = await getConfig()
  if (!config.ROUTE_MAP) {
    throw new Error("no routes configured");
  }
  const toNFee = config.ROUTE_MAP.find(h=> 
    h.from===path
  );
  if (!toNFee) {
    throw new Error("route is not mapped");
  }
  return {fee: toNFee.fee, to: toNFee.to}
}

async function collectFee(fee: number, token: string): Promise<number> {
  if (!token) {
    throw new Error("No token found in X-Cashu header");
  }
  const collectedFee = await claimToken(token)
  if (collectedFee<fee) {
    throw new Error(`Token in X-Cashu did not yield enough... supplied: ${collectFee} sats ---- needed: ${fee} sats` );
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
  const config = await getConfig()
  if (!config.ALLOWED_MINTS) {
    throw new Error("no mints configured");
  }
  const filteredTokenEntries = t.token?.filter((tkn) =>
    config.ALLOWED_MINTS.includes(tkn.mint)
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
  console.log(baseMint)
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
