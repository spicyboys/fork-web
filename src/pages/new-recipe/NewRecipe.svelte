<script lang="ts">
  import type firebase from "firebase";
  import IngredientEntry from "./IngredientEntry.svelte";
  export let user: firebase.User;
</script>

<div class="card">
  <header class="card-header">
    <p class="card-header-title">Create a new recipe</p>
  </header>
  <div class="card-content">
    <IngredientEntry />
    <IngredientEntry />
    <IngredientEntry />
  </div>
</div>
