const HOST_MAP: Dictionary = {
  "localhost:4505": { to: "localhost:4444", fee: 0 },
};

const ROUTE_MAP: Dictionary = {
  "/": { to: "/", fee: 0 },
  "/test": { to: "/", fee: 1 },
};

enum Mode {
  ChuckECheese,
  LNRedeem,
}

export const CONFIG: Config = {
  HOST_MAP,
  ROUTE_MAP,
  ALLOWED_MINTS: ['https://legend.lnbits.com/cashu/api/v1/4gr9Xcmz3XEkUNwiBiQGoC','https://8333.space:3338'],
  MODE: Mode.ChuckECheese,
};

/**
 * -------------------------------------------
 */

interface Config {
  HOST_MAP: Dictionary;
  ROUTE_MAP: Dictionary;
  ALLOWED_MINTS: string[];
  MODE: Mode;
}

interface Dictionary {
  [key: string]: {
    to: string;
    fee: number;
  };
}
