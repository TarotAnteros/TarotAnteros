import { styled } from '@/generated/styled-system/jsx'

export const Ul = styled('ul', {
	base: {
		':where(ul,ol) &': {
			listStyleType: 'circle',
		},
		':where(ul,ol) :where(ul,ol) &': {
			listStyleType: 'square',
		},
		':where(ul,ol) :where(ul,ol) :where(ul,ol) &': {
			listStyleType: 'disc',
		},
		listStyleType: 'disc',
		pl: 'list',
	},
})
