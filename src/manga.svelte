<script>
  import { updateMangaAPI, deleteMangaAPI } from "./apiConnection";
  import mangasListStore from "./mangaStores.js";
  export let manga;
  export let mode;
  let modif = false;

  function modifyManga() {
    let nom = document.getElementById("nomManga").value;
    let chapitre = document.getElementById("chapitreManga").value;

    modif = mode = false;
    mangasListStore.update((current) => {
      return current.filter((value) => {
        if (value._id == manga._id) {
          value.name = nom;
          value.lastChapterRead = chapitre;
        }
        return value;
      });
    });
    updateMangaAPI(manga);
  }
  function deleteManga() {
    mangasListStore.update((current) => {
      return current.filter((value) => value._id != manga._id);
    });
    deleteMangaAPI(manga._id);
  }
</script>

<p>
  <span>
    {#if mode == 2}
      <button on:click={deleteManga}>supprimer</button>
    {:else if mode == 3}
      <button
        on:click={() => {
          modif = true;
          mode = 0;
        }}>modifier</button
      >
    {/if}
    {#if !modif}
      {manga.name}
      {manga.lastChapterRead}
    {:else}
      <input id="nomManga" type="text" value={manga.name} />
      <input id="chapitreManga" type="text" value={manga.lastChapterRead} />
      <button id="modifManga" on:click={modifyManga}>save</button>
    {/if}
  </span>
</p>

<style>
  span {
    background-color: yellowgreen;
    border-radius: 4px;
    padding: 11px;
  }
  p {
    text-align: center;
    margin: 30px;
  }
</style>
