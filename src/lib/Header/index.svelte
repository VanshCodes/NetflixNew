<script>
	import HomeHeaderDetails from '$Data/Home.header.data.js';
	import { onMount } from 'svelte';
	import Banner from './Banner.svelte';
	let view = {
		atTopOfPage: true
	};
	const handleScroll = () => {
		// when the user scrolls, check the pageYOffset
		if (window.pageYOffset > 0) {
			// user is scrolled
			if (view.atTopOfPage) view.atTopOfPage = false;
		} else {
			// user is at top of page
			if (!view.atTopOfPage) view.atTopOfPage = true;
		}
	};
	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});
</script>

<div class="covernav h-screen">
	<nav class={`fixed w-full top-0 z-30 ${view.atTopOfPage ? 'asdsa' : 'bg-black'}`}>
		<div class="flex justify-between">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img {...HomeHeaderDetails.logo} class="w-44 object-contain m-2" />
			<!-- svelte-ignore a11y-missing-attribute -->

			<img {...HomeHeaderDetails.profileLogo} class="w-16 object-contain m-4" />
		</div>
	</nav>

	<Banner />

	<div class="bottomfade" />
</div>

<style>
	.bottomfade {
		background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.5), #111);
	}
</style>
