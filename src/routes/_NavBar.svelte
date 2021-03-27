<script lang="ts">
	import 'carbon-components-svelte/css/all.css';
	import {
		HeaderNav,
		HeaderNavItem,
		HeaderUtilities,
		HeaderAction
	} from 'carbon-components-svelte';
	import Logout16 from 'carbon-icons-svelte/lib/Logout16';
	import { auth } from '$lib/firebase';
</script>

<HeaderNav>
	<HeaderNavItem href="/" text="Add New Recipe" />
</HeaderNav>

<HeaderUtilities>
	<HeaderAction icon={Logout16} on:click={() => auth.signOut()} />
</HeaderUtilities>
