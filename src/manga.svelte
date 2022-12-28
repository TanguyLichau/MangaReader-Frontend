<script>
  export let manga;
  export let mode;
  function test() {
    console.log("yo");
    mode = 0;
  }
</script>

{#if mode == 1}
  <button>ajouter</button>
{:else if mode == 2}
  <button>supprimer</button>
{:else if mode == 3}
  <button>modifier</button>
{/if}
<p><span>{manga.name} {manga.lastChapterRead}</span></p>

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
