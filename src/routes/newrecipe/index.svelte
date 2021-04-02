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

	function makeID() {
		return [...Array(20)].map(() => Math.random().toString(36)[2]).join('');
	}

	let ingredients = [
		{
			id: makeID()
		}
	];

	function addIngredient() {
		ingredients = [
			...ingredients,
			{
				id: makeID()
			}
		];
	}

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
					<FormGroup style="display: flex; flex-wrap: wrap; margin-bottom: 10px;">
						{#each ingredients as ingredient, index (ingredient.id)}
							<IngredientEntry
								bind:value={ingredient}
								on:addIngredient={addIngredient}
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
	h3 {
		margin-bottom: 10px;
	}
</style>
