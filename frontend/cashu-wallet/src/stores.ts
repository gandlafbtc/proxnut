import type { MintKeys, Proof } from '@cashu/cashu-ts';

import { writable,readable } from 'svelte/store';
import type { Toast } from './toast.js';
import { browser } from '$app/environment';

const mint = readable("https://legend.lnbits.com/cashu/api/v1/4gr9Xcmz3XEkUNwiBiQGoC")

const initialTokenSting: string = browser?window.localStorage.getItem('cashu-tokens') ?? '[]':'[]';

const initialToken: Array<Proof> = JSON.parse(initialTokenSting);

const tokens = writable<Array<Proof>>(initialToken);

tokens.subscribe(async (value) => {
		const stringValue = JSON.stringify(value);
        if (browser) {
            window.localStorage.setItem('cashu-tokens', stringValue);
        }
	}
);


const initialKeysSting: string = browser?window.localStorage.getItem('cashu-keys') ?? '{}':'{}';

const initialKeys: MintKeys = JSON.parse(initialKeysSting);

const keys = writable<MintKeys>(initialKeys);

keys.subscribe(async (value) => {
		const stringValue = JSON.stringify(value);
        if (browser) {
            window.localStorage.setItem('cashu-keys', stringValue);
        }
	}
);

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
export { tokens, keys, notifications, mint };


