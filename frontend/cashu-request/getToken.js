
/**
 * 
 * @param {number} amount total amount for the route cost
 * @param {string} url API url to access
 * @param {Function<Event>} ecb callback on unsuccessful access
 */
const getToken = async (amount, ecb) => {
    const token = ''
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
        return token
};