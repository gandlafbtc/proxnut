export enum Mode {
  ChuckECheese,
  LNRedeem,
}

export interface Config {
  GENERAL: {
    isStoreTokens: boolean;
  };
  ROUTE_MAP: ProxyMapping[];
  ALLOWED_MINTS: string[];
  MODE: Mode;
  WEBSOCKET_MODE: boolean;
}

export interface ProxyMapping {
  from: string;
  to: string;
  fee: number;
}
