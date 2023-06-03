/** @typedef {typeof __propDef.props}  WalletProps */
/** @typedef {typeof __propDef.events}  WalletEvents */
/** @typedef {typeof __propDef.slots}  WalletSlots */
export default class Wallet extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type WalletProps = typeof __propDef.props;
export type WalletEvents = typeof __propDef.events;
export type WalletSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
