<script lang="ts">
	import type { Config } from '../../../types';
	import Mints from './Mints.svelte';
	import Routes from './Routes.svelte';

	export let config: Config;
    let oldConfig = config



	const save = async () => {
		const res = await fetch('/api/config', {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				config
			})
		});
        console.log(res)
	};
</script>

<div class="flex flex-col rounded-md bg-base-200 w-full p-2 shadow-xl">
	<div class="flex justify-between">
        <p></p>
		<p class="text-lg font-bold text-primary text-center">Config</p>
        <p class="text-warning">
             unsaved changes
        </p>
	</div>
	<Mints bind:mints={config.ALLOWED_MINTS} />
	
    <div class="divider">
		<p class="font-bold text-primary">Hosts</p>
	</div>
	<Routes bind:routes={config.HOST_MAP}></Routes>
	<div class="divider">
		<p class="font-bold text-primary">Routes</p>
	</div>
	<Routes bind:routes={config.ROUTE_MAP}></Routes>

	<div class="flex justify-end">
		<button class="btn btn-primary" on:click={save}> save </button>
	</div>
</div>
{JSON.stringify(config)}
