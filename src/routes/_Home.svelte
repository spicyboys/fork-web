<script lang="ts">
	import type { Recipe } from '$lib/types/recipe';
	import { onMount } from 'svelte';
	import { Grid, Row, Column, Tile, Button, Loading } from 'carbon-components-svelte';

	let recipes: Recipe[];
	onMount(async () => {
		recipes = await fetch('/user/recipes.json').then((res) => res.json());
	});
</script>

<h1>Your Recipes</h1>

{#if recipes == undefined}
	<Loading />
{:else if recipes.length === 0}
	<Grid>
		<Row>
			<Column md={{ span: 2, offset: 3 }}>
				<Tile>
					<h3>No recipes!</h3>
					<p>Create one now?</p>
				</Tile>
			</Column>
		</Row>
	</Grid>
{:else}
	{#each recipes as recipe}
		<h2>{recipe.name}</h2>
	{/each}
{/if}
