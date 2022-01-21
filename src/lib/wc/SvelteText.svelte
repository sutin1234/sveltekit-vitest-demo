<script>
	export let text;
	let count = 0;
	const handleClick = () => count++;
</script>

<h3>SvelteText</h3>
<div data-testid="text">{text}</div>
<div>{count}</div>
<button on:click={handleClick}>click</button>
