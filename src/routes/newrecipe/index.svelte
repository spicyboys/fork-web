<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ session }) {
		if (!session.user) {
			return {
				status: 303,
				redirect: '/'
			};
		}
		return {};
	}
</script>

<script lang="ts">
	import { Grid, Row, Column, Tile, Form, Button, FormGroup } from 'carbon-components-svelte';
	import IngredientEntry from './_IngredientEntry.svelte';

	// Creates a new 20 character unique ID
	function makeID() {
		return [...Array(20)].map(() => Math.random().toString(36)[2]).join('');
	}

	let ingredients = [
		{
			id: makeID()
		}
	];

	// Insert a new empty ingredient after the specified index
	function addIngredient(i: number) {
		ingredients = [
			...ingredients.slice(0, i + 1),
			{
				id: makeID()
			},
			...ingredients.slice(i + 1)
		];
	}

	// Remove the ingredient at the specified index
	function removeIngredient(i: number) {
		ingredients.splice(i, 1);
		ingredients = ingredients;
		if (ingredients.length === 0) {
			ingredients = [{ id: makeID() }];
		}
	}
</script>

<Grid>
	<Row>
		<Column md={{ span: 4, offset: 2 }}>
			<Tile>
				<h3>Create a Recipe</h3>
				<Form on:submit>
					<FormGroup class="ingredients">
						{#each ingredients as ingredient, index (ingredient.id)}
							<IngredientEntry
								bind:value={ingredient}
								on:addIngredient={() => addIngredient(index)}
								on:remove={() => removeIngredient(index)}
							/>
						{/each}
					</FormGroup>
					<div />
					<Button type="submit">Submit</Button>
				</Form>
			</Tile>
		</Column>
	</Row>
</Grid>

<style lang="scss">
	:global(.ingredients) {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 10px;
	}

	h3 {
		margin-bottom: 10px;
	}
</style>
