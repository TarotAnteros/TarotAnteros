import { blogueData } from '@/airtable/blogue'
import { A } from '@/components/elements/a'
import { H1 } from '@/components/elements/h1'
import { MainColumn } from '@/components/layouts/main-column'
import { parseMD } from '@/components/md/core'
import { FormattedMd } from '@/components/md/formatted'
import { css } from '@/generated/styled-system/css'
import { Box } from '@/generated/styled-system/jsx'
import { siteUrl } from '@/utils/meta'
import { writeFile } from 'fs/promises'
import RemoteImage from 'next-export-optimize-images/remote-image'
import { IoIosArrowRoundBack } from 'react-icons/io'
import RSS from 'rss'

function Back() {
	return (
		<A
			css={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'row',
				gap: '5px',
				textStyle: 'button',
			}}
			href="/blogue"
		>
			<IoIosArrowRoundBack size="2rem" />
			articles du blogue
		</A>
	)
}

async function PostPage({ slug }: { slug: string }) {
	const posts = await blogueData
	const post = posts.find((post) => post.slug === slug)
	if (!post) {
		return <H1>404</H1>
	}
	const vignette = post.Vignette[0]
	return (
		<MainColumn>
			<H1
				css={{
					textAlign: 'center',
				}}
			>
				{post.Titre}
			</H1>
			{vignette && (
				<RemoteImage
					alt={post.Titre}
					className={css({
						height: '50vh',
						objectFit: 'contain',
						width: '100vw',
					})}
					height={0}
					src={vignette.url}
					width={0}
				/>
			)}
			<Box>
				<FormattedMd>{post.Contenu}</FormattedMd>
			</Box>
			<Back />
		</MainColumn>
	)
}

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	return <PostPage slug={slug} />
}

export async function generateStaticParams() {
	const blogue = await blogueData
	const feed = new RSS({
		// TODO: image_url
		feed_url: `${siteUrl}/rss.xml`,
		language: 'fr',
		site_url: siteUrl,
		title: 'Tarot Anteros',
	})
	await Promise.all(
		blogue.map(async (post) => {
			feed.item({
				date: new Date(post.date),
				description: await parseMD(post.Contenu),
				title: post.Titre,
				url: `${siteUrl}/blogue/${post.slug}`,
			})
		}),
	)
	await writeFile('./public/rss.xml', feed.xml({ indent: true }))
	return blogue.map((post) => ({
		slug: post.slug,
	}))
}
