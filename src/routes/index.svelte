<script lang="ts">
	import { user } from '$lib/stores/user';
	import Login from './_Login.svelte';
</script>

{#if $user}
	Logged In
{:else}
	<Login />
{/if}
