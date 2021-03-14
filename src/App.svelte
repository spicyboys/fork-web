<script lang="ts">
  import NavBar from "./NavBar.svelte";

  import { auth, googleProvider } from "./firebase";
  import { authState } from "rxfire/auth";

  let user = authState(auth);
</script>

<main>
  <NavBar
    user={$user}
    on:login={() => auth.signInWithPopup(googleProvider)}
    on:logout={() => auth.signOut()}
  />
</main>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
  />
</svelte:head>
