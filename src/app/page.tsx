import { textesDuSiteData } from '@/airtable/textes-du-site'
import { FormattedMd } from '@/components/formatted-md'
import { AltColumn, Section } from '@/components/layout/alt-column'
import { H1 } from '@/components/layout/h1'
import { H2 } from '@/components/layout/h2'
import { css } from '@/generated/styled-system/css'
import { Box } from '@/generated/styled-system/jsx'

const darkBackground = css({
	backgroundColor:
		'color-mix(in oklab, var(--colors-c2) 20%, var(--colors-c0))',
})

async function Sections() {
	const data = await textesDuSiteData
	return (
		<>
			{data.map((item, i) => (
				<Box key={item.URI} className={i % 2 ? darkBackground : undefined}>
					<Box id={item.URI} position="relative" bottom={['61px', '92px']} />
					<Section>
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
		<AltColumn>
			<Section>
				<H1>Tarot Anteros</H1>
			</Section>
			<Sections />
		</AltColumn>
	)
}
