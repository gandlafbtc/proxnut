<svelte:head>
  <script type="module" src="/proxnut-wallet.js"></script>
</svelte:head>
<script lang="ts">
  import "./app.css";
    import Cards from "./lib/Cards.svelte";

</script>
<div class="z-50 h-20 flex w-full bg-secondary items-center px-2 rounded-b-lg shadow-lg backdrop-filter backdrop-blur-sm fixed top-0 bg-opacity-50">
  <div class=" justify-between w-full flex items-center gap-3">
    <div class="flex gap-2">
      <img src="/proxnut_black.svg" class="h-4" alt="">
      <p class="text-xs">demo</p>
    </div>
      <div>
        <div class="pb-2">
          <proxnut-wallet></proxnut-wallet>
        </div>
  </div>
  </div>
</div>
<div class="pt-20">
  <Cards></Cards>

</div>