<script lang="ts">
	import { onMount } from 'svelte';
	import { session } from '$app/stores';
	import { auth } from '$lib/firebase';

	onMount(() => {
		auth.onAuthStateChanged(function (user) {
			console.log(user);
			if (user) {
				session.update((currentStore) => {
					currentStore.user = { uid: user.uid };
					return currentStore;
				});
				user.getIdToken().then((idToken) => {
					createSession(idToken);
				});
			} else {
				session.update((currentStore) => {
					currentStore.user = null;
					return currentStore;
				});
				deleteSession();
			}
		});
	});

	async function deleteSession() {
		await fetch('/auth/session', {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({})
		});
	}

	async function createSession(idToken: string) {
		await fetch('/auth/session', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ idToken })
		});
	}
</script>
