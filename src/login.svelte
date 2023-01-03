<script>
  import { getJWT } from "./apiConnection";
  import jwtStore from "./authStore";
  let username = "";
  let password = "";
  let jwt;
  export let isLogged = false;
  async function login() {
    try {
      jwt = await getJWT(username, password);
      if (jwt) {
        isLogged = true;
        jwtStore.set(jwt);
      }
    } catch (error) {
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
  }
</script>

<form on:submit|preventDefault={login} autocomplete="off">
  <label for="username">Username:</label>
  <input type="text" id="username" bind:value={username} />
  <br />
  <label for="password">Password:</label>
  <input type="password" id="password" bind:value={password} />
  <br />
  <button type="submit">Log In</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30%;
    margin: 50px auto 0;
    padding: 20px;
  }

  label {
    font-size: 18px;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    height: 35px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    transition: border 0.3s;
  }

  input:focus {
    border: 1px solid #0079d3;
    outline: none;
  }

  button[type="submit"] {
    margin-top: 20px;
    width: 100%;
    height: 40px;
    background-color: #0079d3;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button[type="submit"]:hover {
    background-color: #006bb6;
  }
</style>
