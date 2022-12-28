<script>
  let valeur = "";
  export let mode;
</script>

<div id="container">
  <div id="buttons">
    <button
      on:focusout={() => {
        mode = 0;
      }}
      on:click={() => (mode = 1)}>1</button
    >
    <button
      on:focusout={() => {
        mode = 0;
      }}
      on:click={() => (mode = 2)}>2</button
    >
    <button
      on:focusout={() => {
        mode = 0;
      }}
      on:click={() => (mode = 3)}>3</button
    >
  </div>
  <h1>LIST</h1>
  <input type="text" />
</div>

<style>
  h1 {
    text-align: center;
  }
</style>
