import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        amount: number;
        nav: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CashoutProps = typeof __propDef.props;
export type CashoutEvents = typeof __propDef.events;
export type CashoutSlots = typeof __propDef.slots;
export default class Cashout extends SvelteComponentTyped<CashoutProps, CashoutEvents, CashoutSlots> {
}
export {};
