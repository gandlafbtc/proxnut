<script lang="ts">
	import type { Token } from "@cashu/cashu-ts";
	import type { Config } from "../../../types";
	import Earned from "./Earned.svelte";
	import RouteCount from "./RouteCount.svelte";

    export let config: Config
    export let tokens: Token[]

</script>

<div class="grid grid-cols-3 pb-5 gap-2">

    <Earned {tokens}>
        
    </Earned>
    <RouteCount  {config}></RouteCount>
</div>