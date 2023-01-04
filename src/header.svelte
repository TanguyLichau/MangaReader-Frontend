<script>
  export let mode;
  export let search;
  export let ajout;
</script>

<div id="container">
  <div id="container-line">
    <div id="title" class="header">
      <h1>Manga Reader</h1>
    </div>
    <div class="header">
      <input
        id="SearchBar"
        type="text"
        autocomplete="off"
        bind:value={search}
      />
    </div>
    <div class="header">
      <button
        on:keyup={(e) => {
          if (e.key === "Escape") ajout = false;
        }}
        on:click={() => {
          ajout = true;
        }}
        ><img src="images/plus.svg" alt="add" />
      </button>
      <button
        on:keyup={(e) => {
          if (e.key === "Escape") mode = 0;
        }}
        on:click={() => (mode = 2)}
      >
        <img src="images/x.svg" alt="delete" />
      </button>
      <button
        on:keyup={(e) => {
          if (e.key === "Escape") mode = 0;
        }}
        on:click={() => (mode = 3)}
      >
        <img src="images/more-horizontal.svg" alt="modify" />
      </button>
    </div>
  </div>
</div>

<style>
  #container {
    margin-bottom: 10px;
    background-color: #263238;
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
  .header {
    width: 200px;
  }
  #title {
    overflow: hidden;
    white-space: nowrap;
    color: white;
  }
</style>
