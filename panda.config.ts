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
			breakpoints: {
				lg: '900px',
				md: '600px',
			},
			containerSizes: {
				menu: '44em',
			},
			textStyles: {
				button: {
					value: {
						fontSize: 'small',
						fontWeight: 'bold',
						textTransform: 'uppercase',
					},
				},
				h1: {
					value: {
						fontFamily: 'heading',
						fontSize: '2rem',
						fontWeight: 'bold',
					},
				},
				h2: {
					value: {
						fontFamily: 'heading',
						fontSize: '1.5rem',
						fontWeight: 'bold',
					},
				},
				h3: {
					value: {
						fontFamily: 'heading',
						fontSize: '1.17rem',
						fontWeight: 'bold',
					},
				},
				h4: {
					value: {
						fontFamily: 'heading',
						fontSize: '1rem',
						fontWeight: 'bold',
					},
				},
				h5: {
					value: {
						fontFamily: 'heading',
						fontSize: 'small',
						fontWeight: 'bold',
					},
				},
				h6: {
					value: {
						fontFamily: 'heading',
						fontSize: '0.67rem',
						fontWeight: 'bold',
					},
				},
			},
			tokens: {
				colors: {
					...palette,
					bg0: palette.c0,
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
