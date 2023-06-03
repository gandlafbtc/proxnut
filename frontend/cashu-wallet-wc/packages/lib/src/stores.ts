import type { MintKeys, Proof } from "@cashu/cashu-ts";

import { readable, writable } from "svelte/store";
import type { Toast } from "./toast.js";

const mint = writable(
  "https://legend.lnbits.com/cashu/api/v1/4gr9Xcmz3XEkUNwiBiQGoC",
);

const initialTokenSting: string = window.localStorage.getItem("cashu-tokens") ??
  "[]";

const initialToken: Array<Proof> = JSON.parse(initialTokenSting);

const tokens = writable<Array<Proof>>(initialToken);

tokens.subscribe(async (value) => {
  const stringValue = JSON.stringify(value);

  window.localStorage.setItem("cashu-tokens", stringValue);
});

const initialKeysSting: string = window.localStorage.getItem("cashu-keys") ??
  "{}";

const initialKeys: MintKeys = JSON.parse(initialKeysSting);

const keys = writable<MintKeys>(initialKeys);

keys.subscribe(async (value) => {
  const stringValue = JSON.stringify(value);

  window.localStorage.setItem("cashu-keys", stringValue);
});

const notifications = writable<Toast[]>([]);

export function toast(level: string, message: string) {
  notifications.update((state) => [{ level, message }, ...state]);
  setTimeout(removeToast, 4000);
}

function removeToast() {
  notifications.update((state) => {
    return [...state.slice(0, state.length - 1)];
  });
}
export { keys, mint, notifications, tokens };
