<script lang="ts">
	import type { ProxyMapping } from "../../../types";

    export let routes: ProxyMapping[]
    let from = ''
    let to = ''
    let fee = 0

    const addRoute = async () => {
       if (!routes) {
        routes= []
       }
        routes.push({from, to, fee})
       routes = routes
        
    }

    const removeRoute = (i: number) => {
        routes.splice(i,1);
        routes=routes
    }


</script>
<div class="flex flex-col gap-3 ">

    {#each routes??[] as route, i}     
    <div class="flex flex-row gap-3 items-center">
        <div class="flex gap-2">
            <p>{route.from}</p>
            <svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="text-primary w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
			/>
		</svg>
        <p>{route.to}</p>
        <div class="flex gap-1">
            <p>{route.fee}</p>
            <p>sats</p>
        </div>
        </div>
        <button class="btn btn-secondary" on:click={()=> {removeRoute(i)}}>remove</button>
    </div>
    {/each}
    
	<div class="flex flex-col lg:flex-row gap-3 items-center">
		<input type="text" placeholder="from" class="input input-primary" bind:value={from} />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="text-primary w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
			/>
		</svg>

		<input type="text" class="input input-primary" placeholder="to" bind:value={to}/>
		<input type="number" class="input input-primary w-32" placeholder="fee (sats)" bind:value={fee} />
		<button class="btn btn-secondary" on:click={addRoute}>add</button>
	</div>
</div>
