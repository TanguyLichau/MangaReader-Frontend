<script>
  import Manga from "./manga.svelte";
  import jwtStore from "./authStore";
  import mangasListStore from "./mangaStores.js";
  import Header from "./header.svelte";
  import { createManga } from "./apiConnection";

  export let isLogged;
  let mangalist = [];
  let jwtItem;
  mangasListStore.subscribe((data) => {
    mangalist = data;
  });
  jwtStore.subscribe((data) => {
    jwtItem = data;
  });
  let mode;
  let search = "";
  let ajout = false;

  function filterMangas(filter, mangalist) {
    const filteredNames = mangalist.filter((i) =>
      i.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredNames;
  }
  function addManga() {
    let nom = document.getElementById("nom manga").value;
    let chapitre = document.getElementById("chapitre manga").value;
    createManga({ name: nom, lastChapterRead: chapitre }, jwtItem);
    ajout = false;
  }
</script>

<Header bind:isLogged bind:ajout bind:mode bind:search />
{#if ajout}
  <div id="ajout">
    <input id="nom manga" placeholder="Name..." />
    <input id="chapitre manga" placeholder="Chapter..." />
    <button on:click={addManga}>ajout</button>
  </div>
{/if}
<div id="flex-container">
  {#each filterMangas(search, mangalist) as manga}
    <div id="flex-item">
      <Manga bind:mode {manga} />
    </div>
  {/each}
</div>

<style>
  #flex-item {
    width: 800px;
    height: auto;
    margin: auto;
  }
  #flex-container {
    display: grid;
    grid-template-columns: auto auto;
    text-align: center;
  }
  #ajout {
    text-align: center;
  }
</style>
