<script lang="ts">
	import type { Token } from "@cashu/cashu-ts";

 export let tokens: Token[]
 const earned = tokens.map(t=> {return t.token}).flat().map(t=> t.proofs).flat().reduce((acc, curr)=> acc+curr.amount,0)
</script>



<div class="card w-full bg-secondary text-primary-content">
    <div class="card-body">
      <h2 class="card-title">Tokens claimed</h2>
        {tokens.length??0}
    </div>
</div>
<div class="card w-full bg-secondary text-primary-content">
    <div class="card-body">
      <h2 class="card-title">Sats earned</h2>
        {earned} sats
    </div>
</div>