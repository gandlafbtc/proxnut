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

	
	<div class="flex flex-col lg:flex-row gap-3 items-center">
		
		<p class="text-primary">
			http://localhost:3003

		</p>
		<input type="text" placeholder="/proxy/access/path/" class="input input-primary input-sm" bind:value={from} />
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

		<input type="text" class="input input-primary input-sm" placeholder="http://host:port/to/endpoint" bind:value={to}/>
		<input type="number" class="input input-primary w-32 input-sm" placeholder="fee (sats)" bind:value={fee} />
		<button class="btn btn-secondary btn-sm" on:click={addRoute}>add</button>
	</div>
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
		<button class="btn btn-error btn-sm btn-square rounded-lg" on:click={()=> {removeRoute(i)}}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
			  </svg>
			  </button>
	</div>
	{/each}
</div>
