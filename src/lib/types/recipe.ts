import type { firestore } from 'firebase-admin';

enum IngredientAmountUnit {
	// Whole items
	ITEM = 'item',
	NONE = 'none',

	// Hand-wavy bullshit
	PINCH = 'pinch',

	// Litre
	L = 'l',

	// Gram
	G = 'g'
}

export type Ingredient = {
	name: string;
	amount: number;
	unit: IngredientAmountUnit;
};

export type Recipe = {
	name: string;
	ingredients: Array<Ingredient>;
	servings: number;
};

export const RecipeConverter: firestore.FirestoreDataConverter<Recipe> = {
	toFirestore(recipe: Recipe): firestore.DocumentData {
		return { ...recipe };
	},
	fromFirestore(snapshot: firestore.QueryDocumentSnapshot): Recipe {
		const data = snapshot.data();
		return {
			name: data.name,
			ingredients: data.ingredients,
			servings: data.servings
		};
	}
};
