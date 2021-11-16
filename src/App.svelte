<script lang="ts">
	export let name: string;
</script>

<main>
	<h1 class="text-center text-primary text-5xl">Hello {name}!</h1>
	<p class="text-center text-xl">Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>