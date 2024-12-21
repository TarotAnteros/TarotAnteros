import type { Metadata } from 'next'

import './globals.css'

import { css } from '@/generated/styled-system/css'
import { Box } from '@/generated/styled-system/jsx'

import { Navigation } from './nav'

export const metadata: Metadata = {
	description: 'Site pour Lectures de Tarot',
	title: 'Tarot Anteros',
}

function Credits() {
	return <Box fontSize="small">crédits</Box>
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			className={css({
				backgroundColor: 'bg0',
				color: 'text',
				fontFamily: 'text',
				fontSize: '133.33%',
			})}
			lang="fr"
		>
			<body
				className={css({
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
					width: '100%',
				})}
			>
				<Navigation />
				{children}
				<Credits />
			</body>
		</html>
	)
}
