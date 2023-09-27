import "toastify-js/src/toastify.css"
import Toastify from "toastify-js";


export const toast = (text: string, color1?: string, color2?: string) => {

    Toastify({
        text,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: `linear-gradient(to right, ${color1??'#00b09b'}, ${color2??'#96c93d'})`,
        },
        onClick: function(){} // Callback after click
    }).showToast();
}