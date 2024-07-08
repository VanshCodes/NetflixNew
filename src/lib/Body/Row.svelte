<script lang="ts">
	import type { Movie } from '$data/types/tmdb.types';
	import HomeHeaderData from '@/assets/Data/Home.header.data';
	import Saos from 'saos';

	import { onMount } from 'svelte';
	import axios from 'axios';

	let movies: Movie[] = [];
	let counter = 0;
	export let item;
	export let title: String;
	// export let classes;
	export let isLargeRow = false;
	onMount(async () => {
		let { data } = await axios.get(`/api/${item}`);
		if (!data) return;
		movies = data;
		counter = (await movies) ? movies.length : 0;
	});
</script>

<!-- {#if } -->
{#if counter > 0}
	<div class="flex flex-col my-3">
		<h2 class="text-white text-4xl my-2 font-extrabold mx-3">{title}</h2>
		<div class="flex overflow-y-hidden overflow-x-scroll scrollbar-hide">
			{#each movies as movie, i (movie.id || i)}
				<img
					class="object-contain cursor-pointer w-60 mx-1 transform hover:scale-125 transition-transform duration-200 image-rendering-pixelated p-3 border-spacing-2"
					loading="lazy"
					src={`${HomeHeaderData.rows.baseURL}${
						isLargeRow ? movie.backdrop_path : movie.poster_path
					}`}
					alt=""
				/>
				<!-- content here -->
			{/each}
		</div>
	</div>
{:else}
	<div>Not Found</div>
	<!-- else content here -->
{/if}
