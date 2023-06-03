import type { MintKeys, Proof } from '@cashu/cashu-ts';
import type { Toast } from './toast.js';
declare const mint: import("svelte/store").Readable<string>;
declare const tokens: import("svelte/store").Writable<Proof[]>;
declare const keys: import("svelte/store").Writable<MintKeys>;
declare const notifications: import("svelte/store").Writable<Toast[]>;
export declare function toast(level: string, message: string): void;
export { tokens, keys, notifications, mint };
