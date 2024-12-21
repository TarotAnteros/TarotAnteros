import { Flex } from '@/generated/styled-system/jsx'
import { ReactNode } from 'react'

export function Text({ children }: { children: ReactNode }) {
	return (
		<Flex direction="column" gap="1rem" maxWidth="readable">
			{children}
		</Flex>
	)
}
