import { writable } from "svelte/store";

const mangasListStore = writable(["yo", "le", "gang"]);

export default mangasListStore;
