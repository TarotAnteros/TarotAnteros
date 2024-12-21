import { defineConfig } from '@pandacss/dev'

const palette = {
	c0: { value: '#fdd8a7' },
	c1: { value: '#96806c' },
	c2: { value: '#886b55' },
	c3: { value: '#2e4b47' },
	c4: { value: '#23322d' },
}

export default defineConfig({
	exclude: ['./generated/**/*'],
	include: ['./src/**/*.{js,jsx,ts,tsx}'],
	jsxFramework: 'react',
	outdir: 'src/generated/styled-system',
	preflight: true,
	presets: ['@pandacss/preset-base'],
	theme: {
		extend: {
			containerSizes: {
				menu: '44em',
			},
			textStyles: {
				heading: {
					value: {
						fontFamily: 'heading',
						fontWeight: 'bold',
					},
				},
			},
			tokens: {
				colors: {
					...palette,
					bg0: palette.c0,
					bg1: {
						value:
							'color-mix(in oklab, var(--colors-c2) 30%, var(--colors-c0))',
					},
					bg2: {
						value:
							'color-mix(in oklab, var(--colors-c2) 50%, var(--colors-c0))',
					},
					link: palette.c2,
					text: palette.c4,
				},
				fonts: {
					heading: {
						value: 'var(--font-callingstone)',
					},
					text: {
						value: 'var(--font-printclearly)',
					},
				},
				fontSizes: {
					small: { value: '0.83rem' },
				},
				sizes: {
					readable: {
						value: '80ch',
					},
				},
				spacing: {
					list: {
						value: '2.5em',
					},
				},
			},
		},
	},
})
