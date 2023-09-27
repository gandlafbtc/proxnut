<script lang="ts">
    export let mints: string[]
    let minturl =''

    let isAdding = false
    const addMint = async () => {
        
        isAdding = true
        try {
            const response = await fetch(minturl+'/keys')
            const keys = await response.json() 
            if (!keys) {
                return
            }
        if (!mints) {
            mints =[]
        }
        console.log(mints)
        mints.push(minturl)
        mints=mints
        minturl =''
        } catch (error) {
            
        }
        finally
        {
            isAdding = false
        }
        
    }

    const removeMint = (i: number) => {
        mints.splice(i,1);
        mints=mints
    }


</script>
<div class="divider">
    <p class="font-bold text-primary">
        Allowed Mints
    </p>
</div>
<div class="flex flex-col gap-3 ">

    <div class="flex flex-col lg:flex-row gap-3 items-center">
        
        <input type="text" class="input input-primary input-sm" placeholder="mint url" bind:value={minturl}>
        <button class="btn btn-secondary btn-sm {isAdding?'btn-disabled loading loading-spinner':''}" on:click={addMint}>add</button>
    </div>
    {#each mints??[] as mint, i}     
    <div class="flex flex-row gap-3 items-center">
        <p>{mint}</p>
        <button class="btn btn-error btn-sm btn-square rounded-lg" on:click={()=> {removeMint(i)}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
          </button>
    </div>
    {/each}
</div>
