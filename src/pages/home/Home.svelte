<script lang="ts">
  import type firebase from "firebase";
  export let user: firebase.User;

  import { fade } from "svelte/transition";
  import { collectionData } from "rxfire/firestore";
  import { db } from "../../firebase";
  import Tile from "../../components/Tile.svelte";

  let recipes = collectionData(
    db.collection("recipes").where("author_uid", "==", user.uid)
  );
</script>

<h1 class="title">Hello {user.displayName}!</h1>

{#if $recipes === undefined}
  <div class="columns" transition:fade>
    <div class="column is-half is-offset-one-quarter spinner">
      <i class="fas fa-circle-notch fa-spin" />
    </div>
  </div>
{:else if $recipes.length === 0}
  <div class="tile is-ancestor" transition:fade>
    <Tile width={8}>
      <span slot="title">No recipes found!</span>
      <span slot="subtitle">Create one now?</span>
    </Tile>
  </div>
{:else}
  {JSON.stringify($recipes)}
{/if}

<style>
  .spinner {
    text-align: center;
  }
</style>
