<script lang="ts">
	import { Grid, Row, Column, Tile, Button } from 'carbon-components-svelte';
	import LogoGoogle16 from 'carbon-icons-svelte/lib/LogoGoogle16';
	import { auth, googleProvider } from '$lib/firebase';
	import { session } from '$app/stores';

	async function signIn() {
		const credential = await auth.signInWithPopup(googleProvider);
		const idToken = await credential.user.getIdToken();
		await fetch('/auth/session', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ idToken })
		});
		session.set({ user: { uid: credential.user.uid } });
	}
</script>

<Grid>
	<Row style="margin-bottom: 30px;">
		<Column>
			<h1>Fork</h1>
			<h3>develop your recipes</h3>
		</Column>
	</Row>
	<Row>
		<Column md={{ span: 2, offset: 3 }}>
			<Tile>
				<h4>Sign In</h4>
				<hr />
				<div class="signin-wrapper">
					<Button kind="secondary" icon={LogoGoogle16} on:click={signIn}>Login with Google</Button>
				</div>
			</Tile>
		</Column>
	</Row>
</Grid>

<style lang="scss">
	.signin-wrapper {
		text-align: center;
	}
</style>
