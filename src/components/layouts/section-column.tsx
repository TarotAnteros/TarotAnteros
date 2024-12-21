import { Box, Flex, FlexProps } from '@/generated/styled-system/jsx'
import { ReactNode } from 'react'

export function SectionColumn({
	children,
	...props
}: FlexProps & { children: ReactNode }) {
	return (
		<Flex alignItems="center" flexDirection="column" width="100%">
			<Flex direction="column" py="10px" width="100%" {...props}>
				{children}
			</Flex>
		</Flex>
	)
}

export function Section({
	children,
	...props
}: FlexProps & {
	children: ReactNode
}) {
	return (
		<Flex alignItems="center" direction="column" px="10px" py="1rem" {...props}>
			<Box maxWidth="readable">{children}</Box>
		</Flex>
	)
}
