<script>
  let valeur = "";
  export let mode;
  export let search;
</script>

<div id="container">
  <div id="buttons">
    <button
      on:keyup={(e) => {
        if (e.key === "Escape") mode = 0;
      }}
      on:click={() => (mode = 1)}>1</button
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
  <input type="text" bind:value={search} />
</div>

<style>
  #container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid black;
  }
  h1 {
    text-align: center;
  }
  input {
    border: 1px solid lightgrey;
    outline: none;
    background-color: transparent;
    padding: 10px;
    border-radius: 5px;
  }
</style>
