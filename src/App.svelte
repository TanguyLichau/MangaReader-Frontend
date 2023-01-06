<script>
  import MangaList from "./mangaList.svelte";
  import Login from "./login.svelte";
  import jwtStore from "./authStore";
  let isLogged;
  const storage = localStorage.getItem("jwt");
  if (storage) {
    jwtStore.set(storage);
    isLogged = true;
  }
</script>

{#if isLogged}
  <MangaList bind:isLogged />
{:else}
  <Login bind:isLogged />
{/if}
