<script lang="ts">
	import Row from '$lib/Body/Row.svelte';
	import Request from '$data/utils/requests';
	const dataObj = Object(Request('Dummy'));
	const all_rows = Object.keys(dataObj);
</script>

<div class="flex flex-col">
	{#each all_rows as item, i (i)}
		<!-- content here -->
		<Row {item} title={dataObj[item]['title']} />
	{/each}
</div>
