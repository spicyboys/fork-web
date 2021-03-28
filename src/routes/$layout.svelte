<script lang="ts">
	import 'carbon-components-svelte/css/all.css';
	import { Header, Content } from 'carbon-components-svelte';
	import { session } from '$app/stores';
	import NavBar from './_NavBar.svelte';

	import { auth } from '$lib/firebase';

	let promise: Promise<any> | undefined;
	if ($session.user) {
		promise = auth.signInWithCustomToken($session.user.token);
	}
</script>

{#await promise then _}
	<Header company="Fork">
		{#if $session.user}
			<NavBar />
		{/if}
	</Header>

	<Content>
		<slot />
	</Content>
{/await}
