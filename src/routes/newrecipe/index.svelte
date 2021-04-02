<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ session }) {
		if (!session.user) {
			return {
				status: 303,
				redirect: '/'
			};
		}
		return {};
	}
</script>

<script lang="ts">
	import {
		Grid,
		Row,
		Column,
		Tile,
		Form,
		Select,
		SelectItem,
		Button,
		TextInput,
		FormGroup
	} from 'carbon-components-svelte';
</script>

<Grid>
	<Row>
		<Column md={{ span: 4, offset: 2 }}>
			<Tile>
				<h3>Create a Recipe</h3>
				<Form on:submit>
					<FormGroup style="display: flex;">
						<div class="amount">
							<TextInput hideLabel labelText="Amount" placeholder="Amount" type="number" />
						</div>
						<div class="unit">
							<Select hideLabel labelText="Unit" value="placeholder-item">
								<SelectItem disabled value="placeholder-item" text="Choose a unit" />
								<SelectItem value="option-1" text="Option 1" />
								<SelectItem value="option-2" text="Option 2" />
								<SelectItem value="option-3" text="Option 3" />
							</Select>
						</div>
						<div class="of">of</div>
						<TextInput hideLabel labelText="Item" placeholder="Item" />
					</FormGroup>
					<Button type="submit">Submit</Button>
				</Form>
			</Tile>
		</Column>
	</Row>
</Grid>

<style lang="scss">
	h3 {
		margin-bottom: 10px;
	}

	.amount {
		width: 100px;
	}

	.unit {
		width: 150px;
	}

	.of {
		width: 30px;
		text-align: center;
		margin: auto;
	}
</style>
