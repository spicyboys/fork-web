<script context="module" lang="ts">
	export async function load({ fetch, session }) {
		if (!session.user) {
			return {};
		}

		const res = await fetch('/user/recipes.json');
		if (res.ok) {
			return {
				props: {
					recipes: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error("Could not load user's recipes")
		};
	}
</script>

<script lang="ts">
	import type { Recipe } from '$lib/types/recipe';
	import Login from './_Login.svelte';
	import Home from './_Home.svelte';
	import { session } from '$app/stores';

	export let recipes: Recipe[] | undefined;
</script>

{#if $session.user}
	<Home {recipes} />
{:else}
	<Login />
{/if}
