import { get } from "svelte/store"
import { tokens } from "../../packages/lib/src/stores"
import { getWallet, updateMintKeys } from "../../packages/lib/src/util"
import { getEncodedToken } from "@cashu/cashu-ts"

const cashu_fetch = async (amount: number, input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response> => {
    const wallet = await getWallet()
    const {returnChange,send,newKeys} = await wallet.send(amount, get(tokens))
    if (newKeys) {
        updateMintKeys(newKeys)
    }
    tokens.set(returnChange)
    if (init) {
        if (init.headers) {
            init.headers = {...init.headers, 'X-Cashu': getEncodedToken({token: [{proofs: send, mint:wallet.mint.mintUrl}]})}
        }
    }
    return await fetch(input, init)
}

export {cashu_fetch}