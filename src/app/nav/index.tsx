import { textesDuSiteData } from '@/airtable/textes-du-site'
import { A } from '@/components/elements/a'
import { css } from '@/generated/styled-system/css'
import { Box, Cq, HStack, styled } from '@/generated/styled-system/jsx'

import { NavEntry } from './core'
import { NavMenu } from './menu'
import { navItem } from './nav-item'

function NavBar({ entries }: { entries: NavEntry[] }) {
	return (
		<HStack gap="0px" justify="center">
			{entries.map(({ Titre: title, URI }) => (
				<A
					className={css(
						{
							borderRadius: '5px',
							p: '10px',
							textAlign: 'center',
						},
						navItem,
					)}
					href={URI}
					key={URI}
				>
					{title}
				</A>
			))}
		</HStack>
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
			backgroundColor="bg0"
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

export const Target = styled('div', {
	base: {
		bottom: '2.33rem',
		position: 'relative',
	},
})
