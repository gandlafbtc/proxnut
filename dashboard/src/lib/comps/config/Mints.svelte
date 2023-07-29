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

    {#each mints??[] as mint, i}     
    <div class="flex flex-row gap-3 items-center">
        <p>{mint}</p>
        <button class="btn btn-secondary" on:click={()=> {removeMint(i)}}>remove</button>
    </div>
    {/each}
    <div class="flex flex-col lg:flex-row gap-3 items-center">
        
        <input type="text" class="input input-primary" placeholder="mint url" bind:value={minturl}>
        <button class="btn btn-secondary {isAdding?'btn-disabled loading loading-spinner':''}" on:click={addMint}>add</button>
    </div>
</div>
