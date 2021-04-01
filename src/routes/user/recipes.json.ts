import type { Request, Response } from '@sveltejs/kit';
import { db } from '$lib/firebaseAdmin';
import type { Context } from '$lib/types/context';
import { RecipeConverter } from '$lib/types/recipe';
import type { Recipe } from '$lib/types/recipe';

export async function get(request: Request<Context>): Promise<Response> {
	const recipes = await db
		.collection('recipes')
		.where('author_uid', '==', request.context.user.uid)
		.withConverter(RecipeConverter)
		.get()
		.then((querySnapshot) => {
			const documents: Recipe[] = [];
			querySnapshot.forEach((doc) => {
				documents.push(doc.data());
			});
			return documents;
		});

	try {
		return {
			body: recipes
		};
	} catch (e) {
		return {
			status: 401,
			body: 'Unauthorized'
		};
	}
}
