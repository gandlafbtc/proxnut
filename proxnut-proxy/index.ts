import { CashuMint, CashuWallet, Token, getDecodedToken, getEncodedToken } from "@cashu/cashu-ts";

import { getConfig, storeToken } from "./redis";

import { Hono } from 'hono'

import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors())
app.get('*', async ({req: request}) =>  
  {
    console.log('request: ', request.url)
    try {
        const { host, path, fee: hostFee } = await createUrl(request.url);
        const routePath = await lookupRoute(path)
        const { to: serviceRoute, fee: routeFee } = routePath;
        const fee = hostFee + routeFee;
        if (fee) {
          console.log('resource has a fee')
          await collectFee(fee, request.headers.get("X-Cashu") ?? "");
        }
        console.log(host + serviceRoute)
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
  )

  
  app.onError((err, c) => {
    console.error(`${err}`)
    return c.text('Custom Error Message', 500)
  })

async function createUrl(url: string): Promise<{ host: string; path: string; fee: number }> {
  const { protocol, host, port, path } = splitUrl(url);
  const serviceHost = await lookupHost(protocol+'//'+host, port);
  console.log('create url: ', serviceHost)
  if (!serviceHost) {
    return {host, fee:0, path}
  }
  return { host: `${serviceHost.to}`, path, fee: serviceHost.fee };
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
    config.HOST_MAP = []
  }
  const toNFee = config.HOST_MAP.find(h=> h.from===key);
  if (!toNFee) {
    throw new Error('Host is not mapped')
  }
  return {to: toNFee?.to, fee: toNFee?.fee}
}

async function lookupRoute(path: string): Promise<{ to: string; fee: number }> {
  const config = await getConfig()
  if (!config.ROUTE_MAP) {
    config.ROUTE_MAP = []
  }
  const toNFee = config.ROUTE_MAP.find(h=> 
    h.from===path
  );
  if (!toNFee) {
    return {fee: 0, to:path}
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
  const mint  = new CashuMint(baseMint)
  const wallet = new CashuWallet(mint)
  
  
  try {
    console.log(token)
    const {token: receivedToken} = await wallet.receive(getEncodedToken(token))
    const config = await getConfig()
    if (receivedToken?.token[0]?.proofs.length && config.GENERAL.isStoreTokens) {
      await storeToken(getEncodedToken(receivedToken))
    }
    return receivedToken.token.map(
      (tkn) => tkn.proofs,
      ).flat().reduce((curr, val) => curr+val.amount, 0)
    } catch (error) {
      console.error(error)
      throw new Error("error receiving tokens");
    }
}


export default {
    port: 3003,
    fetch: app.fetch
}