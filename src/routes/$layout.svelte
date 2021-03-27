<script lang="ts">
	import 'carbon-components-svelte/css/all.css';
	import { auth } from '$lib/firebase';
	import { user as userContext } from '$lib/contexts';
	import { authState } from 'rxfire/auth';
	import { setContext } from 'svelte';
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		HeaderNavMenu,
		Content,
	} from 'carbon-components-svelte';

	let user = authState(auth);
	setContext(userContext, {
		getUser: () => $user
	});
</script>

<Header company="Fork">
	{#if $user}
		<HeaderNav>
			<HeaderNavItem href="/" text="Link 1" />
			<HeaderNavItem href="/" text="Link 2" />
			<HeaderNavItem href="/" text="Link 3" />
			<HeaderNavMenu text="Menu">
				<HeaderNavItem href="/" text="Link 1" />
				<HeaderNavItem href="/" text="Link 2" />
				<HeaderNavItem href="/" text="Link 3" />
			</HeaderNavMenu>
			<HeaderNavItem href="/" text="Link 4" />
		</HeaderNav>
	{/if}
</Header>

<Content>
	<slot />
</Content>
