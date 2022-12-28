<script>
  import mangasListStore from "./mangaStores.js";
  let mangalist = [];
  mangalist = $mangasListStore;
</script>

{#each mangalist as test, i}
  <p>{test},{i}</p>
{/each}
