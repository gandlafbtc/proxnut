<script lang="ts">
	import Configuration from "$lib/comps/config/Configuration.svelte";
	import type { Config } from "../types";



    export let data: {config: Config}
    const config = data.config

</script>
<div class="m-2">   
<Configuration {config}></Configuration>
</div>