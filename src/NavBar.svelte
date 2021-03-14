<script lang="ts">
  import type firebase from "firebase";
  import LoginButton from "./LoginButton.svelte";

  export let user: firebase.User | undefined;
</script>

<nav
  class="navbar is-info is-spaced"
  role="navigation"
  aria-label="main navigation"
>
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <p class="title has-text-white">Fork</p>
    </a>
  </div>

  <LoginButton {user} on:login on:logout />
</nav>
