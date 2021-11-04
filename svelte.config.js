import sveltePreprocess from "svelte-preprocess";
import vercel from "@sveltejs/adapter-vercel";

const config = {
	preprocess: [
		sveltePreprocess()
	],
	kit: {
		target: '#svelte',
		files: {
			assets: 'static',
		},
		adapter: vercel(),
		vite: {
			ssr: {
				external: ['firebase'],
			},
			prerender: {
				enabled: false
			},
		},
	},
};

export default config;