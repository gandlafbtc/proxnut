<!-- <svelte:options tag="cashu-wallet"></svelte:options> -->
<script>
    import { tokens } from "../stores.ts";
    import Base from "./Base.svelte";
    import Cashout from "./cashout/Cashout.svelte";
    import Toasts from "./etc/Toasts.svelte";
    import Topup from "./topup/Topup.svelte";

    let dropdownOpen = false;

    $: amount = $tokens.reduce((curr, acc)=> curr+acc.amount,0);
    let nav = "base";
</script>

<div class="flex justify-center h-screen">
    <div class="relative my-32">
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
                        <g
                            id="layer1"
                            transform="translate(-39.926203,-78.282573)"
                        >
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
                <Toasts></Toasts>
            </div>
                {#if nav === "base"}
                <Base {amount}  bind:nav={nav} />
                {:else if nav === "topup"}
                <Topup  bind:nav={nav} />
                {:else if nav === "cashout"}
                <Cashout {amount}  bind:nav={nav} />
                {/if}
            </div>
        {/if}
    </div>
</div>
