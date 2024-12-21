import { css } from '@/generated/styled-system/css'

import './globals.css'

import { Box } from '@/generated/styled-system/jsx'
import clsx from 'clsx'
import localFont from 'next/font/local'

import { Navigation } from './nav'

const callingStone = localFont({
	display: 'block',
	src: './fonts/callingstone.ttf',
	variable: '--font-callingstone',
})

const printClearly = localFont({
	display: 'block',
	src: './fonts/princ.ttf',
	variable: '--font-printclearly',
})

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
			className={clsx(
				css({
					backgroundColor: 'bg0',
					color: 'text',
					fontFamily: 'text',
					fontSize: '130%',
				}),
				callingStone.variable,
				printClearly.variable,
			)}
			lang="fr"
		>
			<title>Tarot Anteros</title>
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
