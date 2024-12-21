import { blogueData, TPost } from '@/airtable/blogue'
import { A } from '@/components/elements/a'
import { H1 } from '@/components/elements/h1'
import { H2 } from '@/components/elements/h2'
import { MainColumn } from '@/components/layouts/main-column'
import { FormattedMd } from '@/components/md/formatted'
import { css } from '@/generated/styled-system/css'
import { Box, HStack, styled, VStack } from '@/generated/styled-system/jsx'
import RemoteImage from 'next-export-optimize-images/remote-image'
import { FaRss } from 'react-icons/fa'

const firstItem = css({
	'& > *': {
		display: 'none',
	},
	'& > *:first-child': {
		display: 'block',
	},
})

const Card = styled('div', {
	base: {
		borderRadius: '5px',
		borderWidth: '1px',
		p: '10px',
	},
})

function FirstPost({ post }: { post: TPost }) {
	return (
		<Card>
			<HStack alignItems="stretch" gap="20px" justify="space-between">
				<VStack alignItems="start" gap="0px" justify="space-between">
					<H2>{post.Titre}</H2>
					<Box className={firstItem}>
						<FormattedMd>{post.Contenu}</FormattedMd>
					</Box>
					<Box flexGrow={1} />
					<A
						className={css({ textStyle: 'button' })}
						href={`/blogue/${post.slug}`}
					>
						lire la suite
					</A>
				</VStack>
				<VStack width="min(30ch, 50%)">
					{post.Vignette[0] && (
						<RemoteImage
							alt={post.Titre}
							className={css({
								objectFit: 'contain',
								width: '100%',
							})}
							height={0}
							src={post.Vignette[0].url}
							width={0}
						/>
					)}
				</VStack>
			</HStack>
		</Card>
	)
}

function Post({ post }: { post: TPost }) {
	return (
		<A href={`/blogue/${post.slug}`}>
			<Card
				className={css({
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'row',
					gap: '20px',
					justifyContent: 'space-between',
				})}
			>
				<h2>{post.Titre}</h2>
				<VStack width="min(8ch, 13%)">
					{post.Vignette[0] && (
						<RemoteImage
							alt={post.Titre}
							className={css({
								objectFit: 'contain',
								width: '100%',
							})}
							height={0}
							src={post.Vignette[0].url}
							width={0}
						/>
					)}
				</VStack>
			</Card>
		</A>
	)
}

function Posts({ posts }: { posts: TPost[] }) {
	if (posts.length === 0) {
		return <Box>À venir</Box>
	}
	return (
		<VStack alignItems="stretch" gap="10px">
			{posts.map((post, i) =>
				i ? (
					<Post key={post.slug} post={post} />
				) : (
					<FirstPost key={post.slug} post={post} />
				),
			)}
		</VStack>
	)
}

export default async function Page() {
	const posts = await blogueData
	return (
		<MainColumn>
			<HStack gap="0px" justifyContent="space-between">
				<H1>Blogue</H1>
				<RSSLink />
			</HStack>
			<Posts posts={posts} />
		</MainColumn>
	)
}

function RSSLink() {
	return (
		<A
			className={css({
				alignItems: 'center',
				display: 'flex',
				gap: '5px',
				textStyle: 'button',
			})}
			href="/rss.xml"
			rel="noreferrer"
		>
			RSS
			<FaRss size="20px" />
		</A>
	)
}
