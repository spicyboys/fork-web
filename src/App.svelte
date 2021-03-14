<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import NavBar from "./NavBar.svelte";
  import Splash from "./pages/Splash.svelte";
  import Home from "./pages/home/Home.svelte";

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

  <Router>
    <Route path="/">
      {#if $user}
        <Home user={$user} />
      {:else}
        <Splash />
      {/if}
    </Route>
  </Router>
</main>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
  />
</svelte:head>
