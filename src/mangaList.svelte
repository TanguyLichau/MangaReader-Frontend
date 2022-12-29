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

  function filterMangas(filter, mangalist) {
    const filteredNames = mangalist.filter((i) =>
      i.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredNames;
  }
</script>

<Header bind:mode bind:search />
{#each filterMangas(search, mangalist) as manga}
  <Manga bind:mode {manga} />
{/each}
