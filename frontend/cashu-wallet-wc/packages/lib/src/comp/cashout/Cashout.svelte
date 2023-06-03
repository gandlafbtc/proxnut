<script lang="ts">
    import { mint, toast, tokens } from "../../stores";
    import { getInvoiceAmount, getWallet, updateMintKeys } from "../../util";
    import Spinner from "../etc/Spinner.svelte";

    export let amount: number;
    export let nav;
    let invoice = "";
    let fee = 0;
    let invoiceAmount = 0;
    let isLoading = false;
    let hasLoaded = false;
    let isPaying = false;

    const checkInvoice = async () => {
        try {
            isLoading = true;
            if (!invoice) {
                toast("warning", "no invoice provided");
                return;
            }
            invoiceAmount = getInvoiceAmount(invoice);
            const wallet = await getWallet();
            fee = await wallet.getFee(invoice);
            if (fee+invoiceAmount>amount) {
                toast('warning', 'not enough funds available')
            }
            hasLoaded = true;
        } catch (error) {
            toast("error", error);
        } finally {
            isLoading = false;
        }
    };

    const payInvoice = async () => {
        try {
            isPaying = true;
            const wallet = await getWallet();
            const {
                returnChange,
                send,
                newKeys: nk,
            } = await wallet.send(invoiceAmount + fee, $tokens);
            if (nk) {
                updateMintKeys(nk);
            }
            const { change, isPaid, preimage, newKeys } =
                await wallet.payLnInvoice(invoice, send);
            if (newKeys) {
                updateMintKeys(newKeys);
            }

            if (!isPaid) {
                toast("warning", "invoice could not be paid. try again later.");
                returnChange.push(...send);
                return;
            }

            tokens.update(() => [...change, ...returnChange]);
            toast("success", "invoice paid");
            abort();
        } catch (error) {
            toast("error", error);
        } finally {
            isPaying = false;
        }
    };

    const abort = () => {
        invoice = "a";
        fee = 0;
        invoiceAmount = 0;
        isLoading = false;
        hasLoaded = false;
        isPaying = false;
        nav = "base";
    };
</script>

<div class="bg-violet-100 flex flex-col items-start text-violet-400 p-2">
    <div
        class="flex flex-col justify-start gap-3 text-violet-600 h-64 items-center"
    >
        {#if isPaying}
            <div
                class="flex w-full h-full items-center gap-2 flex-col justify-center"
            >
                <p class="text-sm">Wait for lightning payment to complete</p>
                <Spinner />
            </div>
        {:else}
            <p class="text-sm">
                Paste a lightning invoice to sweep wallet. (invoice should be 1%
                less than total wallet balance, to cover fees)
            </p>

            {#if hasLoaded}
                <div
                    class="grid grid-cols-3 text-sm items-start justify-start w-full"
                >
                    <p class="font-bold">amount:</p>
                    <p class="col-span-2">{invoiceAmount}</p>
                    <p class="font-bold">fee:</p>
                    <p class="col-span-2">{fee}</p>
                </div>
            {:else}
                <input
                    bind:value={invoice}
                    type="tesxt"
                    class="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-violet-400"
                />
                <div class="h-10">
                    {#if isLoading}
                        <Spinner />
                    {:else}
                        <button
                            class="bg-violet-400 p-1 text-sm rounded-md opacity-90 hover:opacity-100"
                            on:click={checkInvoice}
                        >
                            check
                        </button>
                    {/if}
                </div>
            {/if}
        {/if}
    </div>
    <div class="text-xs flex gap-1 w-full items-center justify-center">
        <p class="font-bold">Mint:</p>
        <p>
            {$mint}
        </p>
    </div>
</div>
<div class="flex w-full flex-grow">
    <div
        on:click={abort}
        class="bg-gray-400 opacity-90 hover:opacity-100 flex-grow text-center font-bold py-2 text-gray-800 cursor-pointer"
    >
        back
    </div>
    {#if hasLoaded && !isPaying}
        <div
            on:click={payInvoice}
            class="bg-violet-500 opacity-90 hover:opacity-100 flex-grow text-center font-bold py-2 text-violet-900 cursor-pointer"
        >
            confirm
        </div>
    {/if}
</div>
