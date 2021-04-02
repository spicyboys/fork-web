<script lang="ts">
	import 'carbon-components-svelte/css/all.css';
	import { Header, Content } from 'carbon-components-svelte';
	import { session } from '$app/stores';
	import NavBar from './_NavBar.svelte';
</script>

<Header company="Fork" href="/">
	{#if $session.user}
		<NavBar />
	{/if}
</Header>

<Content>
	<slot />
</Content>
