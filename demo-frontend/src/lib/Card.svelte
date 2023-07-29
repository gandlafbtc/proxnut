<script lang="ts">
    export let id;
    export let title;
    export let price;

    const urlBase = "http://localhost:3003/";
    let isLoading = false;
    let contents;
    let jsonContents;
    let imageContents;

    const unlock = () => {
        isLoading = true;
        cashuRequest(price, urlBase + id, successUnlock, failUnlock);
    };

    const successUnlock = async (response: Response, e) => {
        const contentType = response.headers.get("Content-Type");
        console.log(contentType);
        if (contentType === "text/plain") {
            contents = await response.text();
        } else if (contentType === "application/json") {
            const data = await response.json();

            console.log(data);
            jsonContents = {
                title: data.title,
                detail: data.detail,
            };
        } else if (contentType === "image/jpeg") {
            const blob = await response.blob();
            var b64Response = btoa(
                String.fromCharCode.apply(
                    null,
                    new Uint8Array(await blob.arrayBuffer())
                )
            );
            imageContents = "data:image/jpeg;base64," + b64Response;
        }
        isLoading = false;
    };

    const failUnlock = (e) => {
        console.log(e.detail.error);
        isLoading = false;
    };

    const cashuRequest = async (amount, url, cb, ecb) => {
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
                    const response = await fetch(url, {
                        headers: {
                            "X-Cashu": e.detail.token,
                        },
                    });

                    cb(response, e);
                },
                { once: true }
            );
    };
</script>

<div class="w-full flex justify-center">
    <div
        class="w-full h-80 gap-2 flex flex-col bg-secondary items-center justify-start p-2 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm top-0 bg-opacity-30"
    >
        <p class="text-primary font-bold text-lg">
            {id}. {title}
        </p>
        {#if contents}
            {contents}
        {:else if jsonContents}
            <div class="flex flex-col gap-2">
                <p
                    class="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-fuchsia-500"
                >
                    {jsonContents.title}
                </p>
                <p>{jsonContents.detail}</p>
            </div>
        {:else if imageContents}
            <div class="w-52">
                <img src={imageContents} alt="" />
            </div>
        {:else if isLoading}
            <button class="btn loading loading-spinner" />
        {:else}
            <button class="btn btn-secondary" on:click={unlock}>
                unlock ({price} sats)
            </button>
        {/if}
    </div>
</div>
