import { Writable, writable } from "svelte/store"

const TIMED_LINKS_KEY = "timedLinks"

function createTimedLinks(): Writable<TimedLink[]> {
    let savedValue: TimedLink[];
    try {
        savedValue = JSON.parse(localStorage.getItem(TIMED_LINKS_KEY));
    } catch (e) {
        console.error("Parsing error while loading saved timed links", e);
    }
    const store = writable(savedValue || [])

    store.subscribe(v => localStorage.setItem(TIMED_LINKS_KEY, JSON.stringify(v)));

    return store;
}

export const timedLinks = createTimedLinks();