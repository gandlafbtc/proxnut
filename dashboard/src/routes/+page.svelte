<script lang="ts">
	import Tokens from "$lib/comps/Tokens.svelte";
	import Configuration from "$lib/comps/config/Configuration.svelte";
	import Insight from "$lib/comps/insight/Insight.svelte";
	import { getDecodedToken } from "@cashu/cashu-ts";
	import type { Config } from "../types";



    export let data: {config: Config, tokens: string[]}
    const config = data.config
    const tokens = data.tokens
    const decodedTokens = tokens.map(t=> getDecodedToken(t)).filter(t=> t.token)


</script>
<div class="m-2">
<Insight {config} tokens={decodedTokens}></Insight>
<Configuration {config}></Configuration>
<Tokens tokens={decodedTokens}></Tokens>
</div>