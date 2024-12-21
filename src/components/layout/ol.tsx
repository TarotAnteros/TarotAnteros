import { styled } from '@/generated/styled-system/jsx'

export const Ol = styled('ol', {
	base: {
		pl: 'list',
		':where(ul,ol) :where(ul,ol) :where(ul,ol) &': {
			listStyleType: 'decimal',
		},
		':where(ul,ol) :where(ul,ol) &': {
			listStyleType: 'lower-roman',
		},
		':where(ul,ol) &': {
			listStyleType: 'lower-alpha',
		},
		listStyleType: 'decimal',
	},
})
