<script>
  import MangaList from "./mangaList.svelte";
  import Login from "./login.svelte";
  let isLogged;
</script>

{#if isLogged}
  <MangaList />
{:else}
  <Login bind:isLogged />
{/if}
