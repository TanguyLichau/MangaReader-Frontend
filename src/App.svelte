<script>
  import MangaList from "./mangaList.svelte";
  import Login from "./login.svelte";
  let isLogged;
  localStorage.removeItem("user");
</script>

{#if isLogged}
  <MangaList bind:isLogged />
{:else}
  <Login bind:isLogged />
{/if}
