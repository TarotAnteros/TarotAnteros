import { Flex } from '@/generated/styled-system/jsx'
import { ReactNode } from 'react'

export function MainColumn({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	return (
		<Flex alignItems="center" flexDirection="column" p="10px" width="100%">
			<Flex
				className={className}
				direction="column"
				gap="2rem"
				maxWidth="readable"
				width="100%"
			>
				{children}
			</Flex>
		</Flex>
	)
}
