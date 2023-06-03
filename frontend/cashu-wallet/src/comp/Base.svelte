<script lang="ts">
    import { mint } from "../stores.ts";

 export let amount: number
 export let nav
</script>

<div class="bg-violet-100 flex flex-col text-violet-400 p-2">
    <div
        class="flex justify-center gap-3 text-4xl text-violet-600 h-64 items-center"
    >
        <div class="flex gap-3 items-center bg-violet-200 p-4 rounded-2xl">

            <p>
                {amount}
        </p>
        <svg
            class=" h-6 -rotate-12"
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
                <g id="g1910" transform="rotate(90,109.17529,178.28257)">
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
    </div>
    </div>
    <div class="text-xs flex gap-1 w-full items-center justify-center">
        <p class="font-bold">Mint:</p>
        <p>
            {$mint}
        </p>
    </div>
</div>
<div class="flex w-full flex-grow">
    <div on:click={()=> nav= 'topup'}
        class="bg-violet-400 opacity-90 hover:opacity-100 flex-grow text-center font-bold py-2 text-violet-800 cursor-pointer"
    >
        top up
    </div>
    <div on:click={()=> nav='cashout'}
        class="bg-violet-500 opacity-90 hover:opacity-100 flex-grow text-center font-bold py-2 text-violet-900 cursor-pointer"
    >
        cash out
    </div>
</div>
