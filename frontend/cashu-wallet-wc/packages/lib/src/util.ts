import { CashuMint, CashuWallet, type MintKeys } from "@cashu/cashu-ts";
import { keys, mint, toast } from "./stores.js";
import { get } from "svelte/store";
import { decode } from '@gandlaf21/bolt11-decode';

export const getWallet = async () => {
  const cashuMint = new CashuMint(get(mint));
  let ks;
  if (!get(keys)["1"]) {
    try {
      ks = await cashuMint.getKeys();
      keys.set(ks);
    } catch (error) {
      console.error(error);
    }
  } else {
    ks = get(keys);
  }
  return new CashuWallet(cashuMint, ks);
};

export const copyToClipboard = (text: string) => {
  // Create a temporary input element
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);

    // Select the text inside the input
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(input);
};

export const getInvoiceAmount = (invoice: string): number => {
return decode(invoice).sections[2].value / 1000;
}

export const updateMintKeys = (newKeys: MintKeys) => {
	keys.set(newKeys);
	toast('info', 'mint keys updated');
};
