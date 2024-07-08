<script lang="ts">
	import random from 'random';
	import HomeHeaderDetails from '@/assets/Data/Home.header.data';
	import { onMount } from 'svelte';
	import type { Movie } from '$data/types/tmdb.types';
	import axios from 'axios';
	let randomMovieStore: Movie | undefined;
	// $: randomMovie = $MovieStore ? $MovieStore.randomMovie :
	onMount(async () => {
		let { data } = await axios.get(HomeHeaderDetails.banner.api.url);
		if (!data) return;
		let randomMovie = data[random.int(0, data.length - 1)];
		randomMovieStore = randomMovie;
	});

	$: console.log({ randomMovieStore });
</script>

{#if randomMovieStore}
	<!-- content here -->

	<header
		class="backdrop-filter backdrop-brightness-50 flex flex-col justify-center banner bg-cover text-white h-full object-contain image-rendering-pixelated"
	>
		<img
			class="-z-[1] absolute w-full h-full [background-cover:cover] object-cover brightness-50"
			src={`${HomeHeaderDetails.banner.poster.baseURL + randomMovieStore.backdrop_path}`}
			alt={`${randomMovieStore.title || randomMovieStore.original_title}`}
		/>
		<div class="header_options relative flex flex-col space-y-6 m-5 z-10">
			<h1 class="font-bold text-white text-6xl xl:text-8xl">
				{randomMovieStore.title || randomMovieStore.original_title}
			</h1>
			<div class="flex buttons space-x-7 py-2">
				<!-- content here -->

				<button class="buttonItem text-gray-100 bg-red-500 font-extrabold flex items-center">
					<span class="material-icons mx-2 text-4xl text-black"> play_arrow </span>
					<div class="text-lg">Play</div>
				</button>
				<button class="buttonItem text-lg"> More Info</button>
			</div>
			<div class="text-xl line-clamp-3 text-white w-6/12">
				{randomMovieStore.overview}
			</div>
		</div>
	</header>
{:else}
	<h1>Unable</h1>
	<!-- else content here -->
{/if}

<style global>
	.banner {
		background-position: center center;
	}
</style>
