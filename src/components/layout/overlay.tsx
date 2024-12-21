import { Box, BoxProps } from '@/generated/styled-system/jsx'
import { ReactNode } from 'react'

export function Overlay({
	children,
	...props
}: BoxProps & { children: ReactNode }) {
	return (
		<Box
			backgroundColor="c0"
			bottom="0"
			left="0"
			position="fixed"
			right="0"
			top="0"
			zIndex="100"
			{...props}
		>
			{children}
		</Box>
	)
}
