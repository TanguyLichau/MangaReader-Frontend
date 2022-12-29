<script>
  import Manga from "./manga.svelte";
  import mangasListStore from "./mangaStores.js";
  import Header from "./header.svelte";
  let mangalist = [];
  mangasListStore.subscribe((data) => {
    mangalist = data;
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
    /*
    mangasListStore.update((current) => {
      return [...current, { name: nom, lastChapterRead: chapitre }];
    });*/
    ajout = false;
  }
</script>

<Header bind:ajout bind:mode bind:search />
{#if ajout}
  <div id="ajout">
    <input id="nom manga" placeholder="Name..." />
    <input id="chapitre manga" placeholder="Chapter..." />
    <button on:click={addManga}>ajout</button>
  </div>
{/if}
{#each filterMangas(search, mangalist) as manga}
  <Manga bind:mode {manga} />
{/each}

<style>
  #ajout {
    text-align: center;
  }
</style>
