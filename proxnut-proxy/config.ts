import { Config, Dictionary, Mode } from "./types.ts";

const be_url = Bun.env.BACKEND_HOST??'localhost'

/**
 * --------------edit this config-----------------
 */

const WEBSOCKET_MODE = false

const HOST_MAP: Dictionary = {
  "https://demo-api.proxnut.com": { to: `${be_url}:4444`, fee: 0 },
};

const ROUTE_MAP: Dictionary = {
  "/": { to: "/", fee: 0 },
  "/test": { to: "/test", fee: 1 },
  "/1": { to: "/1", fee: 1 },
  "/2": { to: "/2", fee: 3 },
  "/3": { to: "/3", fee: 5 },
};

const ALLOWED_MINTS: string[] = ['https://legend.lnbits.com/cashu/api/v1/4gr9Xcmz3XEkUNwiBiQGoC','https://8333.space:3338']

const MODE = Mode.ChuckECheese // does nothing yet
 

/**
 * -----------------------------------------------
 */

export const CONFIG: Config = {
  HOST_MAP,
  ROUTE_MAP,
  ALLOWED_MINTS,
  MODE,
  WEBSOCKET_MODE
};
