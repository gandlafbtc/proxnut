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