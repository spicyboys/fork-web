<script lang="ts">
	import {
		HeaderNav,
		HeaderNavItem,
		HeaderUtilities,
		HeaderAction
	} from 'carbon-components-svelte';
	import Logout16 from 'carbon-icons-svelte/lib/Logout16';
	import { auth } from '$lib/firebase';
</script>

<HeaderNav style="display: block;">
	<HeaderNavItem href="/" text="Add New Recipe" />
</HeaderNav>

<HeaderUtilities>
	<HeaderAction icon={Logout16} on:click={() => auth.signOut()} />
</HeaderUtilities>
