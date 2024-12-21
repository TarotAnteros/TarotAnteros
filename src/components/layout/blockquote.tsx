import { styled } from '@/generated/styled-system/jsx'

export const Blockquote = styled('blockquote', {
	base: {
		backgroundColor:
			'color-mix(in oklab, var(--colors-c2) 30%, var(--colors-c0))',
		borderColor: 'color-mix(in oklab, var(--colors-c2) 50%, var(--colors-c0))',
		borderLeftWidth: '4px',
		fontSize: '85%',
		pl: 'calc(1rem - 4px)',
	},
})
