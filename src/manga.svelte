<script>
  import jwtStore from "./authStore";
  import { updateMangaAPI, deleteMangaAPI } from "./apiConnection";
  import mangasListStore from "./mangaStores.js";
  export let manga;
  export let mode;
  let modif = false;
  let jwtItem;
  jwtStore.subscribe((data) => {
    jwtItem = data;
  });

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
    updateMangaAPI(manga, jwtItem);
  }
  function deleteManga() {
    modif = mode = false;
    mangasListStore.update((current) => {
      return current.filter((value) => value._id != manga._id);
    });
    deleteMangaAPI(manga._id, jwtItem);
  }
</script>

<div id="flex-container">
  <div id="flex-item">
    <img id="cover" src={manga.coverUrl} alt="cover" />
    <p>
      <span>
        {#if mode == 2}
          <button on:click={deleteManga}>
            <img src="images/trash.svg" alt="delete" />
          </button>
        {:else if mode == 3}
          <button
            on:click={() => {
              modif = true;
              mode = 0;
            }}
          >
            <img src="images/edit-2.svg" alt="modify" />
          </button>
        {/if}
        {#if !modif}
          {manga.name} :
          {manga.lastChapterRead}
        {:else}
          <input id="nomManga" type="text" value={manga.name} />
          <input id="chapitreManga" type="text" value={manga.lastChapterRead} />
          <button id="modifManga" on:click={modifyManga}>save</button>
        {/if}
      </span>
    </p>
  </div>
</div>

<style>
  #flex-container {
    margin-bottom: 25px;
  }
  #cover {
    width: 20%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  span {
    background-color: #adb5bd;
    border-radius: 24px;
    padding: 11px;
  }
  p {
    text-align: center;
    margin: 30px;
    font-size: larger;
  }
  span:hover {
    font-size: x-large;
  }
  button {
    background: none;
    border: none;
  }
</style>
