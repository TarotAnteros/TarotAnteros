import { textesDuSiteData } from '@/airtable/textes-du-site'
import { FormattedMd } from '@/components/formatted-md'
import { H1 } from '@/components/layout/h1'
import { H2 } from '@/components/layout/h2'
import { Section, SectionColumn } from '@/components/layout/section-column'
import { css } from '@/generated/styled-system/css'
import { Box } from '@/generated/styled-system/jsx'

const darkBackground = css({
	backgroundColor: 'bg1',
})

async function Sections() {
	const data = await textesDuSiteData
	return (
		<>
			{data.map((item, i) => (
				<Box key={item.URI}>
					<Box bottom={'2.33rem'} id={item.URI} position="relative" />
					<Section className={i % 2 ? darkBackground : undefined}>
						<H2>{item.Titre}</H2>
						<FormattedMd>{item.Contenu}</FormattedMd>
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
