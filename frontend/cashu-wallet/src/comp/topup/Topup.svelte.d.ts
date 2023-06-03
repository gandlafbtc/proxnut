import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        nav: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TopupProps = typeof __propDef.props;
export type TopupEvents = typeof __propDef.events;
export type TopupSlots = typeof __propDef.slots;
export default class Topup extends SvelteComponentTyped<TopupProps, TopupEvents, TopupSlots> {
}
export {};
