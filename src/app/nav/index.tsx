import { Box, Cq, Flex } from '@/generated/styled-system/jsx'
import { textesDuSiteData } from '@/airtable/textes-du-site'
import Link from 'next/link'
import { NavMenu } from './menu'
import { NavEntry } from './core'
import { rev } from '@/components/layout/rev'
import clsx from 'clsx'
import { css } from '@/generated/styled-system/css'

const entry = clsx(
	rev,
	css({
		p: '10px',
		borderRadius: '5px',
		textAlign: 'center',
	}),
)

function NavBar({ entries }: { entries: NavEntry[] }) {
	return (
		<Flex direction="row" justify="center">
			{entries.map(({ URI, Titre: title }) => (
				<Link href={URI} key={URI} className={entry}>
					{title}
				</Link>
			))}
		</Flex>
	)
}

export async function Navigation() {
	const textesDuSite = await textesDuSiteData
	const entries = textesDuSite.map(({ URI, Titre }) => ({
		URI: '/#' + URI,
		Titre,
	}))
	entries.push({ URI: '/blogue', Titre: 'Blogue' })
	return (
		<Cq
			width="100%"
			position="sticky"
			top="0"
			backgroundColor="c0"
			py="20px"
			px="10px"
		>
			<Box display={{ base: 'block', '@/menu': 'none' }}>
				<NavMenu entries={entries} />
			</Box>
			<Box display={{ base: 'none', '@/menu': 'block' }}>
				<NavBar entries={entries} />
			</Box>
		</Cq>
	)
}
