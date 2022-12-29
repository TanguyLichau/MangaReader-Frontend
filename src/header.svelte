<script>
  import { compute_slots } from "svelte/internal";

  let valeur = "";
  export let mode;
  export let search;

  function addManga() {
    const div = document.getElementById("container");

    let inputNom = document.createElement("input");
    inputNom.setAttribute("type", "text");
    inputNom.setAttribute("placeholder", "Name");

    let inputChapitre = document.createElement("input");
    inputChapitre.setAttribute("type", "text");
    inputChapitre.setAttribute("placeholder", "Chapter");

    let btn = document.createElement("button");
    btn.innerHTML = "Click Me";
    btn.addEventListener("click", function () {
      console.log(inputNom.value);
      console.log(inputChapitre.value);
      div.removeChild(inputNom);
      div.removeChild(inputChapitre);
      div.removeChild(btn);
    });

    div.appendChild(inputNom);
    div.appendChild(inputChapitre);
    div.appendChild(btn);
  }
</script>

<div id="container">
  <div id="container-line">
    <div id="buttons">
      <button
        on:keyup={(e) => {
          if (e.key === "Escape") mode = 0;
        }}
        on:click={addManga}>1</button
      >
      <button
        on:keyup={(e) => {
          if (e.key === "Escape") mode = 0;
        }}
        on:click={() => (mode = 2)}>2</button
      >
      <button
        on:keyup={(e) => {
          if (e.key === "Escape") mode = 0;
        }}
        on:click={() => (mode = 3)}>3</button
      >
    </div>
    <h1>LIST</h1>
    <input id="SearchBar" type="text" bind:value={search} />
  </div>
</div>

<style>
  #container {
    border-bottom: 3px solid black;
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
