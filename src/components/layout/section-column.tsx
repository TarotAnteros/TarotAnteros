import { Box, Flex } from '@/generated/styled-system/jsx'
import { ReactNode } from 'react'

export function SectionColumn({ children }: { children: ReactNode }) {
	return (
		<Flex alignItems="center" flexDirection="column" py="10px" width="100%">
			<Flex direction="column" width="100%">
				{children}
			</Flex>
		</Flex>
	)
}

export function Section({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	return (
		<Flex
			alignItems="center"
			className={className}
			direction="column"
			px="10px"
			py="1rem"
		>
			<Box maxWidth="readable">{children}</Box>
		</Flex>
	)
}
