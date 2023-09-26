import {
  CashuMint,
  CashuWallet,
  getDecodedToken,
  getEncodedToken,
  Token,
} from "@cashu/cashu-ts";

import { getConfig, storeToken } from "./redis";

import { Hono } from "hono";

import { cors } from "hono/cors";

const app = new Hono();

app.use("*", cors());
app.get("*", async ({ req: request }) => {
  try {
    const routePath = await lookupRoute(request.url);
    const { to: serviceRoute, fee } = routePath;

    if (!serviceRoute){
      return new Response('route not mapped', { status: 404 })
    }

    if (fee) {
      console.log("resource has a fee");
      let token = request.headers.get("X-Cashu");
      if (!token) {
        token = request.query("cashu") ?? "";
        console.log(token);
      }
      const collectedFee = await collectFee(fee, token ?? "");
      if (collectedFee<fee){
      return new Response(`route costs ${fee} sats, but only provided ${collectedFee} sats`, { status: 402 })
      }
    } 

    const response = await fetch(serviceRoute, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
    return response;
  } catch (error) {
    console.error(error);
    const response = new Response(error, { status: 500 });
    return response;
  }
});

app.onError((err, c) => {
  console.error(`${err}`);
  return c.text("Custom Error Message", 500);
});

async function lookupRoute(url: string): Promise<{ to: string|undefined; fee: number }> {
  try {

    const config = await getConfig();
    const parsedUrl = new URL(url);
    const lookup = parsedUrl.pathname
    console.log(lookup)
    console.log(config.ROUTE_MAP)
    const toNFee = config.ROUTE_MAP.find((r) => r.from === lookup);
    if (!toNFee) {
      return { fee: 0, to: undefined };
    }
    return { fee: toNFee.fee, to: toNFee.to };
  }
  catch (error) {
    console.error(error)
    throw new Error("");
    
  }
}

async function collectFee(fee: number, token: string): Promise<number> {
  if (!token) {
    throw new Error("No token found in X-Cashu header");
  }
  const collectedFee = await claimToken(token);

  return collectedFee;
}

async function claimToken(token: string): Promise<number> {
  let t;
  try {
    t = getDecodedToken(token);
  } catch (error) {
    throw new Error(error);
  }
  if (!t) {
    return 0;
  }
  const config = await getConfig();
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

  const amountReceived = await receiveTokens({ token: filteredTokenEntries });

  return amountReceived;
}

async function receiveTokens(token: Token): Promise<number> {
  const baseMint = token.token[0].mint;
  const mint = new CashuMint(baseMint);
  const wallet = new CashuWallet(mint);

  try {
    console.log(token);
    const { token: receivedToken } = await wallet.receive(
      getEncodedToken(token),
    );
    const config = await getConfig();
    if (
      receivedToken?.token[0]?.proofs.length && config.GENERAL.isStoreTokens
    ) {
      await storeToken(getEncodedToken(receivedToken));
    }
    return receivedToken.token.map(
      (tkn) => tkn.proofs,
    ).flat().reduce((curr, val) => curr + val.amount, 0);
  } catch (error) {
    console.error(error);
    throw new Error("error receiving tokens");
  }
}

export default {
  port: 3003,
  fetch: app.fetch,
};
