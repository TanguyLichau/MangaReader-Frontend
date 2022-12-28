<script>
  import Manga from "./manga.svelte";
  import mangasListStore from "./mangaStores.js";
  import Header from "./header.svelte";
  let mangalist = [];
  mangasListStore.subscribe((data) => {
    mangalist = data;
  });

  let mode;
</script>

<Header bind:mode />
{#each mangalist as manga}
  <Manga {mode} {manga} />
{/each}
