<script lang="ts">
  import { Link, link } from "svelte-routing";
  import type firebase from "firebase";
  import LoginButton from "./LoginButton.svelte";

  export let user: firebase.User | undefined;

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      console.log("Here");
      return { class: "is-active navbar-item" };
    }
    return { class: "navbar-item" };
  }
</script>

<nav
  class="navbar is-info is-spaced"
  role="navigation"
  aria-label="main navigation"
>
  <div class="navbar-brand">
    <a class="navbar-item" href="/" use:link>
      <p class="title has-text-white">Fork</p>
    </a>
  </div>

  <div class="navbar-menu">
    {#if user}
      <div class="navbar-start">
        <Link to="new" {getProps}>New Recipe</Link>
      </div>
    {/if}
    <LoginButton {user} on:login on:logout />
  </div>
</nav>
