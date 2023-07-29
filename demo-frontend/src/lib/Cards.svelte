<script>
    import Card from "./Card.svelte";

    const items = [{id: 1, title: 'Text content', price: 1},{id: 2, title: 'json content', price: 3},{id: 3, title: 'image content', price: 5}]

</script>
<div
    class="w-full grid grid-cols-1 lg:grid-cols-3 gap-3 items-center justify-center p-2"
  >

  {#each items as item}
  
  <Card id={item.id} title={item.title} price={item.price}></Card>
  {/each}
  </div>