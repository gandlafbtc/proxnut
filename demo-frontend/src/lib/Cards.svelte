<script>
    import Card from "./Card.svelte";

    const items = [{id: 1, title: 'Text content', price: 1},{id: 2, title: 'json content', price: 3},{id: 3, title: 'image content', price: 5}]

    const cashuGoto = async (amount, url, ecb) => {
    const event = new CustomEvent("ask-for-nut", {
        bubbles: true,
        composed: true,
        detail: {
            amount: amount,
        },
    });
    document
        .querySelector("proxnut-wallet")
        .shadowRoot.querySelector("#cashu-base-div")
        .dispatchEvent(event);
    document
        .querySelector("proxnut-wallet")
        .shadowRoot.querySelector("#cashu-base-div")
        .addEventListener(
            "return-nut",
            async (e) => {
                console.log(e);
                if (e.detail.error) {
                    ecb(e);
                    return;
                }
                const response = await window.open(url+'?cashu='+e.detail.token, '_self');

            },
            { once: true }
        );
};

</script>
<div
    class="w-full grid grid-cols-1 lg:grid-cols-3 gap-3 items-center justify-center p-2"
  >

  {#each items as item}
  
  <Card id={item.id} title={item.title} price={item.price}></Card>
  {/each}
  </div>

  <button on:click={()=> {cashuGoto(1, 'http://localhost:3003/nut', ()=> console.log('fail'))}}>
    go to a secret website 🕶️ (1 sat)
  </button>