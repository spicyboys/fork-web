<script lang="ts">
	import { db, auth } from '$lib/firebase';
	import type { Recipe } from '$lib/types/recipe';
	import { RecipeConverter } from '$lib/types/recipe';

	const recipesPromise = db
		.collection('recipes')
		.where('author_uid', '==', auth.currentUser.uid)
		.withConverter(RecipeConverter)
		.get()
		.then((querySnapshot) => {
			const documents: Recipe[] = [];
			querySnapshot.forEach((doc) => {
				documents.push(doc.data());
			});
			return documents;
		});
</script>

<h1>Your Recipes</h1>

{#await recipesPromise then recipes}
	{#each recipes as recipe}
		<h2>{recipe.name}</h2>
	{/each}
{/await}
