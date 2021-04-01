<script lang="ts">
	import type { Recipe } from '$lib/types/recipe';
	export let recipes: Recipe[];
</script>

<h1>Your Recipes</h1>

{#each recipes as recipe}
	<h2>{recipe.name}</h2>
{/each}
