<script>
  import mangasListStore from "./mangaStores.js";
  let mangalist = [];
  mangasListStore.subscribe((data) => {
    mangalist = data;
  });
</script>

{#each mangalist as test, i}
  <p>{test.name},{i}</p>
{/each}
