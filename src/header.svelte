<script>
  export let mode;
  export let search;
  export let ajout;
  export let isLogged;
  export let favoriteMode = false;
</script>

<div id="container">
  <div id="container-line">
    <div id="title" class="buttons">
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
    <div id="buttons" class="header">
      <button
        class="button"
        on:keyup={(e) => {
          if (e.key === "Escape") ajout = false;
        }}
        on:click={() => {
          ajout = true;
        }}
        ><img src="images/plus.svg" alt="add" />
      </button>
      <button
        class="button"
        on:keyup={(e) => {
          if (e.key === "Escape") mode = 0;
        }}
        on:click={() => (mode = 2)}
      >
        <img src="images/x.svg" alt="delete" />
      </button>
      <button
        class="button"
        on:keyup={(e) => {
          if (e.key === "Escape") mode = 0;
        }}
        on:click={() => (mode = 3)}
      >
        <img src="images/more-horizontal.svg" alt="modify" />
      </button>
      <button
        id="logout"
        on:click={() => {
          localStorage.removeItem("jwt");
          isLogged = false;
        }}>Logout</button
      >
      <button
        on:click={() => {
          favoriteMode = !favoriteMode;
        }}>favorite</button
      >
    </div>
  </div>
</div>

<style>
  #logout {
    align-items: center;
  }
  .button {
    font-size: larger;
  }
  #container {
    margin-bottom: 25px;
    background-color: #263238;
    margin-top: 0;
    width: 100%;
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
    background-color: white;
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
    padding-left: 15px;
  }
  #buttons {
    padding-right: 15px;
    text-align: right;
  }
</style>
