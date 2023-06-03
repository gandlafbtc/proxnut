import { CashuWallet, type MintKeys } from "@cashu/cashu-ts";
export declare const getWallet: () => Promise<CashuWallet>;
export declare const copyToClipboard: (text: string) => void;
export declare const getInvoiceAmount: (invoice: string) => number;
export declare const updateMintKeys: (newKeys: MintKeys) => void;
