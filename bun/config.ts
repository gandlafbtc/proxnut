import { Config, Dictionary, Mode } from "./types.ts";

/**
 * --------------edit this config-----------------
 */


const HOST_MAP: Dictionary = {
  "localhost:3003": { to: "localhost:4444", fee: 0 },
};

const ROUTE_MAP: Dictionary = {
  "/": { to: "/", fee: 0 },
  "/test": { to: "/test", fee: 1 },
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
  MODE
};
