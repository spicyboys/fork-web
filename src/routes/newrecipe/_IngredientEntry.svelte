<script lang="ts">
	import { Select, SelectItem, TextInput, Button } from 'carbon-components-svelte';
	import Add16 from 'carbon-icons-svelte/lib/Add16';
	import Subtract16 from 'carbon-icons-svelte/lib/Subtract16';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let value: { id: string };
	let amount: number;
	let unit: string;
	let item: string;

	$: value = {
		id: value.id,
		amount,
		unit,
		item
	};
</script>

<div class="wrapper">
	<div class="amount">
		<TextInput
			hideLabel
			labelText="Amount"
			placeholder="Amount"
			type="number"
			bind:value={amount}
		/>
	</div>
	<div class="unit">
		<Select hideLabel labelText="Unit" value="placeholder" bind:selected={unit}>
			<SelectItem disabled value="placeholder" text="Choose a unit" />
			<SelectItem value="tbs" text="Teaspoon" />
			<SelectItem value="tbsp" text="Tablespoon" />
			<SelectItem value="pinch" text="Pinch" />
		</Select>
	</div>
	<div class="of">of</div>
	<TextInput hideLabel labelText="Item" placeholder="Item" bind:value={item} />
	<Button
		size="field"
		kind="ghost"
		iconDescription="Add ingredient"
		icon={Add16}
		on:click={() => dispatch('addIngredient')}
	/>
	<Button
		size="field"
		kind="ghost"
		iconDescription="Remove ingredient"
		icon={Subtract16}
		on:click={() => dispatch('remove')}
	/>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		width: 100%;
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
