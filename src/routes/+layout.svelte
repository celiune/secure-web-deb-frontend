<script >
	import Nav from './Nav.svelte';
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>
<body>

<Nav {data} />

<main >
	<slot />
</main>
</body>

<style>
	body{
		background: linear-gradient(to bottom, #33ccff, #ff99cc);
		background-repeat: no-repeat;
		background-attachment: fixed;
		height: 100%;
		margin: 0;
		padding: 1rem;
	}
</style>