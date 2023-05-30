export enum Mode {
  ChuckECheese,
  LNRedeem,
}

export interface Config {
  HOST_MAP: Dictionary;
  ROUTE_MAP: Dictionary;
  ALLOWED_MINTS: string[];
  MODE: Mode;
}

export interface Dictionary {
  [key: string]: {
    to: string;
    fee: number;
  };
}
