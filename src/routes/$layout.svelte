<script lang="ts">
	import 'carbon-components-svelte/css/all.css';
	import { Header, Content } from 'carbon-components-svelte';
	import { user } from '$lib/stores/user';
	import NavBar from './_NavBar.svelte';
</script>

<Header company="Fork">
	{#if $user}
		<NavBar />
	{/if}
</Header>

<Content>
	<slot />
</Content>
