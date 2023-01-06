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
        localStorage.setItem("jwt", jwt.token);
        jwtStore.set(jwt);
      }
    } catch (error) {
      console.log(error);
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
  }
</script>

<form class="box" on:submit|preventDefault={login} autocomplete="off">
  <h1>Sign In</h1>
  <label id="username" for="username" />
  <input
    type="text"
    id="username"
    placeholder="Username"
    bind:value={username}
  />
  <br />
  <label id="password" for="password" />
  <input
    type="password"
    id="password"
    placeholder="Password"
    bind:value={password}
  />
  <br />
  <button type="submit">Log In</button>
</form>

<style>
  .box {
    width: 300px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .box h1 {
    color: white;
    text-transform: uppercase;
    font-weight: 500;
  }
  .box input[type="text"],
  .box input[type="password"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
  }
  .box input[type="text"]:focus,
  .box input[type="password"]:focus {
    width: 280px;
    border-color: #2ecc71;
  }
  .box button[type="submit"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #2ecc71;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
  }
  .box button[type="submit"]:hover {
    background: #2ecc71;
  }
</style>
