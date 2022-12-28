import { writable } from "svelte/store";
/*
let data;
let mangasListStore = writable([]);

fetch("http://192.168.1.54:3000/manga/", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    mangasListStore.set(data.result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// fake {_id: '639ef90b3cb2d827312c8044', name: 'test', lastChapterRead: 10, __v: 0}
*/
const mangasListStore = writable([
  {
    _id: "639ef90b3cb2d827312c8044",
    name: "test",
    lastChapterRead: 10,
    __v: 0,
  },
  {
    _id: "639ef90b3cb2d827312c2424",
    name: "bengbeng",
    lastChapterRead: 200,
    __v: 0,
  },
]);
//console.log("test");
export default mangasListStore;
