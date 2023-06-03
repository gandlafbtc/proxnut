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
export type BaseProps = typeof __propDef.props;
export type BaseEvents = typeof __propDef.events;
export type BaseSlots = typeof __propDef.slots;
export default class Base extends SvelteComponentTyped<BaseProps, BaseEvents, BaseSlots> {
}
export {};
