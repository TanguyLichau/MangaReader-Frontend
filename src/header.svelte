<script>
  export let mode;
  export let search;
  export let ajout;
</script>

<div id="container">
  <div id="container-line">
    <div id="buttons">
      <button
        on:keyup={(e) => {
          if (e.key === "Escape") mode = 0;
        }}
        on:click={() => {
          ajout = true;
        }}>Ajouter</button
      >
      <button
        on:keyup={(e) => {
          if (e.key === "Escape") mode = 0;
        }}
        on:click={() => (mode = 2)}>Supprimer</button
      >
      <button
        on:keyup={(e) => {
          if (e.key === "Escape") mode = 0;
        }}
        on:click={() => (mode = 3)}>Modifier</button
      >
    </div>
    <h1>LIST</h1>
    <input id="SearchBar" type="text" bind:value={search} />
  </div>
</div>

<style>
  #container {
    border-bottom: 3px solid black;
    margin-bottom: 10px;
  }
  #container-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    text-align: center;
  }
  #SearchBar {
    border: 1px solid lightgrey;
    outline: none;
    background-color: transparent;
    padding: 10px;
    border-radius: 5px;
  }
</style>
