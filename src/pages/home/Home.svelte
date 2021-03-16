<script lang="ts">
  import type firebase from "firebase";
  export let user: firebase.User;

  import { fade } from "svelte/transition";
  import { collectionData } from "rxfire/firestore";
  import { db } from "../../firebase";
  import Tile from "../../components/Tile.svelte";
  import { Link } from "svelte-routing";
  import { RecipeConverter } from "../../types/recipe";
  import type { Recipe } from "../../types/recipe";
  import type { Observable } from "rxjs";

  let recipes: Observable<Recipe[]> = collectionData(
    db
      .collection("recipes")
      .where("author_uid", "==", user.uid)
      .withConverter(RecipeConverter)
  );
</script>

<h1 class="title">Your Recipes</h1>

{#if $recipes === undefined}
  <div class="columns" transition:fade>
    <div class="column is-half is-offset-one-quarter spinner">
      <i class="fas fa-circle-notch fa-spin" />
    </div>
  </div>
{:else if $recipes.length === 0}
  <div class="tile is-ancestor wrapper" transition:fade>
    <Tile width={8}>
      <span slot="title">No recipes found!</span>
      <span slot="subtitle">Create one now?</span>
      <div class="level">
        <div class="level-left" />
        <div class="level-right">
          <Link to="new" getProps={() => ({ class: "button level-item" })}>
            <span class="icon">
              <i class="fas fa-plus" />
            </span>
            <span>New Recipe</span>
          </Link>
        </div>
      </div>
    </Tile>
  </div>
{:else}
  <div class="tile is-ancestor wrapper" transition:fade>
    {#each $recipes as recipe}
      <Tile width={4}>
        <span slot="title">{recipe.name}</span>
        <span slot="subtitle">Servings: {recipe.servings}</span>
        {#each recipe.ingredients as ingredient}
          <table class="table recipe-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ingredient.name}</td>
                <td>{ingredient.amount}</td>
                <td>{ingredient.unit}</td>
              </tr>
            </tbody>
          </table>
        {/each}
      </Tile>
    {/each}
  </div>
{/if}

<style>
  .spinner {
    text-align: center;
  }
  .wrapper {
    flex-wrap: wrap;
  }
  .recipe-table {
    width: 100%;
  }
</style>
