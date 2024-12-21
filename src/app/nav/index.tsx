import { textesDuSiteData } from '@/airtable/textes-du-site'
import { rev } from '@/components/layout/rev'
import { css } from '@/generated/styled-system/css'
import { Box, Cq, Flex } from '@/generated/styled-system/jsx'
import clsx from 'clsx'
import Link from 'next/link'

import { NavEntry } from './core'
import { NavMenu } from './menu'

const entry = clsx(
	rev,
	css({
		borderRadius: '5px',
		p: '10px',
		textAlign: 'center',
	}),
)

function NavBar({ entries }: { entries: NavEntry[] }) {
	return (
		<Flex direction="row" justify="center">
			{entries.map(({ Titre: title, URI }) => (
				<Link className={entry} href={URI} key={URI}>
					{title}
				</Link>
			))}
		</Flex>
	)
}

export async function Navigation() {
	const textesDuSite = await textesDuSiteData
	const entries = textesDuSite.map(({ Titre, URI }) => ({
		Titre,
		URI: '/#' + URI,
	}))
	entries.push({ Titre: 'Blogue', URI: '/blogue' })
	return (
		<Cq
			backgroundColor="c0"
			position="sticky"
			px="10px"
			py="20px"
			top="0"
			width="100%"
		>
			<Box display={{ '@/menu': 'none', base: 'block' }}>
				<NavMenu entries={entries} />
			</Box>
			<Box display={{ '@/menu': 'block', base: 'none' }}>
				<NavBar entries={entries} />
			</Box>
		</Cq>
	)
}
