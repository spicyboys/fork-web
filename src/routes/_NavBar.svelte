<script lang="ts">
	import {
		HeaderNav,
		HeaderNavItem,
		HeaderUtilities,
		HeaderAction
	} from 'carbon-components-svelte';
	import Logout16 from 'carbon-icons-svelte/lib/Logout16';
	import { auth } from '$lib/firebase';
	import { session } from '$app/stores';

	async function signOut() {
		await auth.signOut();
		await fetch('/auth/session', {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({})
		});
		session.set({ user: null });
	}
</script>

<HeaderNav style="display: block;">
	<HeaderNavItem href="/newrecipe" text="Add New Recipe" />
</HeaderNav>

<HeaderUtilities>
	<HeaderAction icon={Logout16} on:click={() => signOut()} />
</HeaderUtilities>
