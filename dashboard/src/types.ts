export enum Mode {
  ChuckECheese,
  LNRedeem,
}

export interface Config {
  HOST_MAP: ProxyMapping[];
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
