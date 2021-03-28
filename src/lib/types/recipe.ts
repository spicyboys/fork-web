import type firebase from 'firebase';

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

export const RecipeConverter: firebase.firestore.FirestoreDataConverter<Recipe> = {
	toFirestore(recipe: Recipe): firebase.firestore.DocumentData {
		return { ...recipe };
	},
	fromFirestore(
		snapshot: firebase.firestore.QueryDocumentSnapshot,
		options: firebase.firestore.SnapshotOptions
	): Recipe {
		const data = snapshot.data(options)!;
		return {
			name: data.name,
			ingredients: data.ingredients,
			servings: data.servings
		};
	}
};
