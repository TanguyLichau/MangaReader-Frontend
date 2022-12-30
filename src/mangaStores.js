import { writable } from "svelte/store";
import { getAllMangas } from "./apiConnection";

let data;
let mangasListStore = writable([]);

getAllMangas()
  .then((data) => {
    mangasListStore.set(data.result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

export default mangasListStore;
