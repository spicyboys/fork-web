<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import NavBar from "./NavBar.svelte";
  import Splash from "./pages/Splash.svelte";
  import Home from "./pages/home/Home.svelte";
  import NewRecipe from "./pages/new-recipe/NewRecipe.svelte";

  import { auth, googleProvider } from "./firebase";
  import { authState } from "rxfire/auth";

  let user = authState(auth);
</script>

<main>
  <Router>
    <NavBar
      user={$user}
      on:login={() => auth.signInWithPopup(googleProvider)}
      on:logout={() => auth.signOut()}
    />

    <section class="section">
      {#if $user}
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <Route path="/">
              <Home user={$user} />
            </Route>
            <Route path="new">
              <NewRecipe user={$user} />
            </Route>
          </div>
        </div>
      {:else}
        <Route path="/">
          <Splash />
        </Route>
      {/if}
    </section>
  </Router>
</main>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
    integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
    crossorigin="anonymous"
  />
</svelte:head>
