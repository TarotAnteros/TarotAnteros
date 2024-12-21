import { Flex, FlexProps } from '@/generated/styled-system/jsx'
import { ReactNode } from 'react'

export function MainColumn({
	children,
	...props
}: FlexProps & {
	children: ReactNode
}) {
	return (
		<Flex alignItems="center" flexDirection="column" p="10px" width="100%">
			<Flex
				direction="column"
				gap="2rem"
				maxWidth="readable"
				width="100%"
				{...props}
			>
				{children}
			</Flex>
		</Flex>
	)
}
