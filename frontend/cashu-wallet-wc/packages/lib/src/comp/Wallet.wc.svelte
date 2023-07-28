<svelte:options tag="proxnut-wallet" />

<script lang="ts">
    import { onMount } from "svelte";

    import { mint, tokens } from "../stores";
    import Base from "./Base.svelte";
    import Cashout from "./cashout/Cashout.svelte";
    import Toasts from "./etc/Toasts.svelte";
    import Topup from "./topup/Topup.svelte";
    import { getWallet, updateMintKeys } from "../util";
    import { getEncodedToken, type Token } from "@cashu/cashu-ts";

    export let minturl;

    let domElement;

    const handleGetNutEvent = async (e) => {
        try {
            const wallet = await getWallet();
            const { returnChange, send, newKeys } = await wallet.send(
                e.detail.amount,
                $tokens
            );
            if (newKeys) {
                updateMintKeys(newKeys);
            }

            tokens.set([...returnChange]);
            const token = getEncodedToken({
                token: [{ mint: $mint, proofs: send }],
            });
            const event = new CustomEvent("return-nut", {
                bubbles: true,
                composed: true,
                detail: {
                    token,
                },
            });
            domElement.dispatchEvent(event);
        } catch (error) {
            const event = new CustomEvent("return-nut", {
                bubbles: true,
                composed: true,
                detail: {
                    error,
                },
            });
            domElement.dispatchEvent(event);
        }
    };

    onMount(() => {
        if (minturl) {
            mint.set(minturl);
        }
        console.log(domElement);
        domElement.addEventListener("ask-for-nut", handleGetNutEvent, false);
    });
    let dropdownOpen = false;

    $: amount = $tokens.reduce((curr, acc) => curr + acc.amount, 0);
    let nav = "base";
</script>

<div class="relative right-2 top-2" id="cashu-base-div" bind:this={domElement}>
    <button
        on:click={() => (dropdownOpen = !dropdownOpen)}
        class="relative z-10 block rounded-md p-2 focus:outline-none bg-violet-300 opacity-90 hover:opacity-100"
    >
        <div class="flex gap-2 items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-violet-500"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                />
            </svg>
            <p class="text-violet-500 flex gap-1 items-baseline">
                {Intl.NumberFormat("en", {
                    notation: "compact",
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 0,
                }).format(amount)}
                <svg
                    class="text-violet-600 h-3 -rotate-12"
                    fill="currentColor"
                    viewBox="0 0 138.49818 200"
                    version="1.1"
                    id="svg5"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="layer1" transform="translate(-39.926203,-78.282573)">
                        <g
                            id="g1910"
                            transform="rotate(90,109.17529,178.28257)"
                        >
                            <path
                                id="path846"
                                style="stroke-width:1.76621;stroke-dasharray:14.1297, 14.1297;"
                                d="M 35.068359,563.06055 A 377.95276,377.95276 0 0 0 412.63086,935.55273 377.95276,377.95276 0 0 0 790.19336,563.06055 H 488.1875 a 75.59055,75.59055 0 0 1 0.0332,0.21484 75.59055,75.59055 0 0 1 -75.58984,75.5918 75.59055,75.59055 0 0 1 -75.58984,-75.5918 75.59055,75.59055 0 0 1 0.0332,-0.21484 z"
                                transform="scale(0.26458333)"
                            />
                            <circle
                                style="stroke-width:0.884323;stroke-dasharray:7.07458, 7.07458;"
                                id="path870-8"
                                cx="49.175293"
                                cy="149.03348"
                                r="40"
                            />
                            <circle
                                style="stroke-width:0.884323;stroke-dasharray:7.07458, 7.07458;"
                                id="path870-8-3"
                                cx="169.17529"
                                cy="149.03348"
                                r="40"
                            />
                        </g>
                    </g>
                </svg>
            </p>
        </div>
    </button>

    {#if dropdownOpen}
        <div
            on:click={() => (dropdownOpen = false)}
            class="fixed inset-0 h-full w-full z-10"
        />
        <div
            class="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20 w-64"
        >
            <div>
                <Toasts />
            </div>
            {#if nav === "base"}
                <Base {amount} bind:nav />
            {:else if nav === "topup"}
                <Topup bind:nav />
            {:else if nav === "cashout"}
                <Cashout {amount} bind:nav />
            {/if}
        </div>
    {/if}
</div>

<style>
    @import "cashu-wallet.css";

    #base-div {
        line-height: 1.5;
        /* 1 */
        -webkit-text-size-adjust: 100%;
        /* 2 */
        -moz-tab-size: 4;
        /* 3 */
        -o-tab-size: 4;
        tab-size: 4;
        /* 3 */
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
            "Noto Color Emoji";
        /* 4 */
        font-feature-settings: normal;
        /* 5 */
        font-variation-settings: normal;
        /* 6 */
    }
</style>
