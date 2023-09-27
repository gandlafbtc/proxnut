<script lang="ts">
import {  getEncodedToken, type Token } from "@cashu/cashu-ts";
 export let tokens : Token[]
</script>

<div class="overflow-x-auto pt-5 p-2">
  <p class="font-bold text-center">
    Tokens claimed by Proxnut
  </p>
    <table class="table table-zebra table-xs">
      <!-- head -->
      <thead>
        <tr>
          <th>#</th>
          <th>Amount</th>
          <th>Keyset</th>
          <th>Mint</th>
          <th>Token</th>
        </tr>
      </thead>
      <tbody>
        
        {#each tokens as token,i}
        <tr>
          <td>{i}</td>
            <th>{token.token[0].proofs.reduce((acc, curr)=>curr.amount+acc, 0)}</th>
            <td>{token.token[0].proofs[0].id}</td>
            <td>{token.token[0].mint}</td>
            <td>{getEncodedToken(token)}</td>
        </tr>
        {/each}
       
      </tbody>
    </table>
  </div>