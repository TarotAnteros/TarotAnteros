import { Box, BoxProps, styled, VStack } from '@/generated/styled-system/jsx'
import { ReactNode } from 'react'

const Inner = styled('div', {
	base: {
		display: 'flex',
		flexDirection: 'column',
		py: '10px',
		width: '100%',
	},
})

export function SectionColumn({
	children,
	...props
}: BoxProps & { children: ReactNode }) {
	return (
		<VStack width="100%">
			<Inner {...props}>{children}</Inner>
		</VStack>
	)
}

const Outer = styled('div', {
	base: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		px: '10px',
		py: '1rem',
	},
})

export function Section({
	children,
	...props
}: BoxProps & {
	children: ReactNode
}) {
	return (
		<Outer {...props}>
			<Box maxWidth="readable">{children}</Box>
		</Outer>
	)
}
