import { textesDuSiteData } from '@/airtable/textes-du-site'
import { H1 } from '@/components/elements/h1'
import { H2 } from '@/components/elements/h2'
import { H3 } from '@/components/elements/h3'
import { H4 } from '@/components/elements/h4'
import { Section, SectionColumn } from '@/components/layouts/section-column'
import { MD } from '@/components/md/core'
import { mdComponents } from '@/components/md/formatted'
import { css } from '@/generated/styled-system/css'
import { Box } from '@/generated/styled-system/jsx'
import clsx from 'clsx'

import { Target } from './nav'

const sectionComponents = {
	...mdComponents,
	h1: H2,
	h2: H3,
	h3: H4,
}
function SectionMD({ children }: { children: string }) {
	return <MD components={sectionComponents}>{children}</MD>
}

async function Sections() {
	const data = await textesDuSiteData
	return (
		<>
			{data.map((item, i) => (
				<Box key={item.URI}>
					<Target id={item.URI} />
					<Section
						className={clsx({
							[css({
								bg: 'c2/30',
							})]: i % 2,
						})}
					>
						<H2>{item.Titre}</H2>
						<SectionMD>{item.Contenu}</SectionMD>
					</Section>
				</Box>
			))}
		</>
	)
}

export default async function Home() {
	return (
		<SectionColumn>
			<Section>
				<H1>Tarot Anteros</H1>
			</Section>
			<Sections />
		</SectionColumn>
	)
}
