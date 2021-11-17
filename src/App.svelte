<script lang="ts">
	import { isLoading, _ } from 'svelte-i18n'
	export let name: string;
</script>

<main>
	{#if $isLoading}
		Please wait
	{:else }
		<h1 class="text-center text-primary text-5xl">{$_('hello', { values: { name: $_(name) } })}</h1>
	{/if}
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>