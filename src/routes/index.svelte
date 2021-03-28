<script lang="ts">
	import Login from './_Login.svelte';
	import { session } from '$app/stores';
</script>

{#if $session.user}
	Logged In
{:else}
	<Login />
{/if}
