<script lang="ts">
	import Login from './_Login.svelte';
	import Home from './_Home.svelte';
	import { session } from '$app/stores';
</script>

{#if $session.user}
	<Home />
{:else}
	<Login />
{/if}
