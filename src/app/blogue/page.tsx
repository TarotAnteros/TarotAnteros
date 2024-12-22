import { blogueData, TPost } from '@/airtable/blogue'
import { A } from '@/components/elements/a'
import { H1 } from '@/components/elements/h1'
import { H2 } from '@/components/elements/h2'
import { MainColumn } from '@/components/layouts/main-column'
import { FormattedMd } from '@/components/md/formatted'
import { css } from '@/generated/styled-system/css'
import {
	Box,
	Flex,
	HStack,
	styled,
	VStack,
} from '@/generated/styled-system/jsx'
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

const FocusCard = styled('div', {
	base: {
		borderRadius: '5px',
		borderWidth: { base: '0px', md: '1px' },
		p: '10px',
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
		<FocusCard>
			<Flex
				alignItems="stretch"
				direction={{ base: 'column-reverse', md: 'row' }}
				gap={{ base: '40px', md: '20px' }}
				justify="space-between"
			>
				<VStack alignItems="start" gap="0px" justify="space-between">
					<H2 textAlign={{ base: 'center', md: 'start' }} width="100%">
						{post.Titre}
					</H2>
					<Box className={firstItem}>
						<FormattedMd>{post.Contenu}</FormattedMd>
					</Box>
					<Box flexGrow={1} />
					<A css={{ textStyle: 'button' }} href={`/blogue/${post.slug}`}>
						lire la suite
					</A>
				</VStack>
				<VStack justify="center" minWidth="40%">
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
			</Flex>
		</FocusCard>
	)
}

function Post({ post }: { post: TPost }) {
	return (
		<A href={`/blogue/${post.slug}`}>
			<Card
				css={{
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'row',
					gap: '20px',
					justifyContent: 'space-between',
				}}
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
			css={{
				alignItems: 'start',
				display: 'flex',
				gap: '5px',
				textStyle: 'button',
			}}
			href="/rss.xml"
			rel="noreferrer"
		>
			RSS
			<FaRss size="20px" />
		</A>
	)
}
