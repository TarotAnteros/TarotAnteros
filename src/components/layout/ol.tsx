import { styled } from '@/generated/styled-system/jsx'

export const Ol = styled('ol', {
	base: {
		':where(ul,ol) &': {
			listStyleType: 'lower-alpha',
		},
		':where(ul,ol) :where(ul,ol) &': {
			listStyleType: 'lower-roman',
		},
		':where(ul,ol) :where(ul,ol) :where(ul,ol) &': {
			listStyleType: 'decimal',
		},
		listStyleType: 'decimal',
		pl: 'list',
	},
})
