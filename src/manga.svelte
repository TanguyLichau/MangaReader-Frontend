<script>
  export let manga;
  export let mode;
  let modif = false;

  function saveManga() {
    let nom = document.getElementById("nomManga").value;
    let chapitre = document.getElementById("chapitreManga").value;
    console.log("nom : " + nom + " chapitre : " + chapitre);
    console.log(manga._id);
    modif = false;
    mode = false;
  }
  function deleteManga() {
    console.log(manga._id);
  }
</script>

<p>
  <span>
    {#if mode == 1}
      <button>ajouter</button>
    {:else if mode == 2}
      <button on:click={deleteManga}>supprimer</button>
    {:else if mode == 3}
      <button
        on:click={() => {
          modif = true;
        }}>modifier</button
      >
    {/if}
    {#if !modif}
      {manga.name}
      {manga.lastChapterRead}
    {:else}
      <input id="nomManga" type="text" value={manga.name} />
      <input id="chapitreManga" type="text" value={manga.lastChapterRead} />
      <button id="modifManga" on:click={saveManga}>save</button>
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
