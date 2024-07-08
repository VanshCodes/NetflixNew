import adapter from '@sveltejs/adapter-auto';
import { config as configDotenv } from 'dotenv';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */

configDotenv()

const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			$data: ("./src/"),
			$components: ("./src/components"),
			$stores: ("./src/stores"),
			$Data: ("./src/assets/Data"),
			"@": ("./src")

		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
