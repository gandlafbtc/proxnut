<script lang="ts">
	import isEqual from 'lodash.isequal';
	import type { Config } from '../../../types';
	import Mints from './Mints.svelte';
	import Routes from './Routes.svelte';
	import General from './General.svelte';
	import Toastify from "toastify-js";
	import { toast } from '../../../util/toast';
	

	export let config: Config;
    let oldConfig = {...config}
	let hasChanges = false
	$: config && testConfigChanged()
	
	const testConfigChanged = () => 
	{
		if(!isEqual(config, oldConfig)) {
			hasChanges=true
		}
		else {
			hasChanges=false
		}
	}

	const save = async () => {
		try {
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
		if (res.status===200) {
			oldConfig = {...config}
		}
        console.log(res)
		
			toast('config saved.')
		} catch (error) {
			
		}
		
	};
</script>

<div class="flex flex-col rounded-md bg-base-200 w-full p-2 shadow-xl">
	<div class="flex justify-between">
        <p></p>
		<p class="text-lg font-bold text-primary text-center">Config</p>
        <p class="text-warning">
			{#if hasChanges}
				unsaved changes
			{/if}
        </p>
	</div>
	<div class="divider">
		<p class="font-bold text-primary">General Settings</p>
	</div>
	<General bind:general={config.GENERAL}></General>
	<Mints bind:mints={config.ALLOWED_MINTS} />
	<div class="divider">
		<p class="font-bold text-primary">Routes</p>
	</div>
	<Routes bind:routes={config.ROUTE_MAP}></Routes>

	<div class="flex justify-end">
		<button class="btn btn-primary" on:click={save}> save </button>
	</div>
</div>
