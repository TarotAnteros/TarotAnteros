import { BoxProps, styled, VStack } from '@/generated/styled-system/jsx'
import { ReactNode } from 'react'

const Inner = styled('div', {
	base: {
		display: 'flex',
		flexDirection: 'column',
		gap: '2rem',
		maxWidth: 'readable',
		width: '100%',
	},
})

export function MainColumn({
	children,
	...props
}: BoxProps & {
	children: ReactNode
}) {
	return (
		<VStack p="10px" width="100%">
			<Inner {...props}>{children}</Inner>
		</VStack>
	)
}
