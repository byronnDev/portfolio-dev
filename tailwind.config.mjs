export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'text-gradient': 'text-gradient 1.5s linear infinite',
			},
			keyframes: {
				'text-gradient': {
					to: {
						backgroundPosition: '200% center',
					},
				},
			},
		},
	},
	plugins: [],
}
