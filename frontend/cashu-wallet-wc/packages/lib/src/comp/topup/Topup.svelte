<script lang="ts">
    import { mint, toast, tokens } from "../../stores";
    import { QRCodeImage } from "svelte-qrcode-image";
    import { copyToClipboard, getWallet, updateMintKeys } from "../../util";
    import Spinner from "../etc/Spinner.svelte";

    export let nav;

    let topupAmount = 100;
    let step = 1;
    let invoice = "";
    let interval: number | undefined;

    const getInvoice = async () => {
        const cashuWallet = await getWallet()
        try {
            step = 2;
            const { hash, pr, detail } = await cashuWallet.requestMint(
                topupAmount
            );
            interval = setInterval(()=> {tryMint(hash)}, 4000);
            invoice = pr;
        } catch (error) {}
    };

    const tryMint = async (hash:string) => {
        try {
            const wallet = await getWallet()
            const {proofs, newKeys} = await wallet.requestTokens(topupAmount, hash)
            if (newKeys) {
                updateMintKeys(newKeys)
            }
            tokens.update(state => [...proofs,...state])
            toast('success',`topped up ${proofs.reduce((curr, acc)=> curr+acc.amount,0)} sat`)
            abort()
        } catch (error) {
            console.error(error)
        }
    };

    const abort = () => {
        nav = "base";
        invoice = "";
        topupAmount = 100;
        step = 1;
        if (interval) {
            clearInterval(interval);
            interval = undefined;
        }
    };

    const copyInvoice = () =>{
        copyToClipboard(invoice)
        toast('info', 'invoice copied to clipboard')
    }



</script>

<div class="bg-violet-100 flex flex-col text-violet-400 p-2">
    <div class="flex justify-center gap-3 text-violet-600 h-64 items-center">
        {#if step === 1}
            <!-- content here -->
            <p>Amount (satoshi)</p>
            <input
                bind:value={topupAmount}
                type="number"
                class="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-violet-400"
            />
        {:else if step === 2}
            {#if invoice}
                <div class="flex flex-col gap-1 items-center">
                    <div class="flex gap-1 items-center">

                        <p>
                            waiting for payment 
                        </p>
                        <Spinner></Spinner>
                    </div>
                        
                    <a href="lightning:{invoice}">
                        <QRCodeImage
                        displayHeight={200}
                        displayWidth={200}
                        text={invoice}
                        />
                    </a>
                    <div class="p-1 rounded-lg bg-violet-200 w-6 hover:bg-violet-300 cursor-pointer" on:click={copyInvoice} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                          </svg>
                    </div>
                </div>
            {:else}
                loading invoice...
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
    {#if step === 1}
        <div
            on:click={() => (nav = "base")}
            class="bg-gray-400 opacity-90 hover:opacity-100 flex-grow text-center font-bold py-2 text-gray-800 cursor-pointer"
        >
            back
        </div>
        <div
            on:click={getInvoice}
            class="bg-violet-500 opacity-90 hover:opacity-100 flex-grow text-center font-bold py-2 text-violet-900 cursor-pointer"
        >
            confirm
        </div>
    {:else}
        <div
            on:click={abort}
            class="bg-gray-400 opacity-90 hover:opacity-100 flex-grow text-center font-bold py-2 text-gray-800 cursor-pointer"
        >
            abort
        </div>{/if}
</div>
