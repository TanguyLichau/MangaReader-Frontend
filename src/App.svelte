<script>
  import MangaList from "./mangaList.svelte";
  import Login from "./login.svelte";
  import jwtStore from "./authStore";
  let isLogged;
</script>

{#if isLogged}
  <MangaList bind:isLogged />
{:else}
  <Login bind:isLogged />
{/if}
