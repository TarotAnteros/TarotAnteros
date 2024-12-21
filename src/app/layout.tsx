import type { Metadata } from 'next'

import './globals.css'

import { css } from '@/generated/styled-system/css'

import { Navigation } from './nav'

export const metadata: Metadata = {
	description: 'Site pour Lectures de Tarot',
	title: 'Tarot Anteros',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			className={css({
				backgroundColor: 'c0',
				color: 'c4',
				fontFamily: 'printclearly',
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
			</body>
		</html>
	)
}
