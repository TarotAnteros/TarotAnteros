import { blogueData, TPost } from '@/airtable/blogue'
import { FormattedMd } from '@/components/formatted-md'
import { buttonText } from '@/components/layout/button-text'
import { H1 } from '@/components/layout/h1'
import { H2 } from '@/components/layout/h2'
import { MainColumn } from '@/components/layout/main-column'
import { css } from '@/generated/styled-system/css'
import { Box, Flex } from '@/generated/styled-system/jsx'
import clsx from 'clsx'
import RemoteImage from 'next-export-optimize-images/remote-image'
import Link from 'next/link'
import { FaRss } from 'react-icons/fa'

const firstItem = css({
	'& > *': {
		display: 'none',
	},
	'& > *:first-child': {
		display: 'block',
	},
})

function FirstPost({ post }: { post: TPost }) {
	return (
		<Box
			className={css({
				borderRadius: '5px',
				borderWidth: '1px',
				p: '10px',
			})}
		>
			<Flex direction="row" gap="20px" justifyContent="space-between">
				<Flex direction="column">
					<H2>{post.Titre}</H2>
					<Box className={firstItem}>
						<FormattedMd>{post.Contenu}</FormattedMd>
					</Box>
					<Box flexGrow={1} />
					<Link className={buttonText} href={`/blogue/${post.slug}`}>
						lire la suite
					</Link>
				</Flex>
				<Flex align="center" justify="center" width="min(30ch, 50%)">
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
				</Flex>
			</Flex>
		</Box>
	)
}

function Post({ post }: { post: TPost }) {
	return (
		<Link
			className={clsx(
				css({
					alignItems: 'center',
					borderColor: 'text',
					borderRadius: '5px',
					borderStyle: 'solid',
					borderWidth: '1px',
					color: 'link',
					display: 'flex',
					flexDirection: 'row',
					fontWeight: 'bold',
					gap: '20px',
					justifyContent: 'space-between',
					p: '10px',
				}),
			)}
			href={`/blogue/${post.slug}`}
		>
			<h2>{post.Titre}</h2>
			<Flex align="center" justify="center" width="min(8ch, 13%)">
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
			</Flex>
		</Link>
	)
}

function Posts({ posts }: { posts: TPost[] }) {
	if (posts.length === 0) {
		return <Box>À venir</Box>
	}
	return (
		<Flex direction="column" gap="10px">
			{posts.map((post, i) =>
				i ? (
					<Post key={post.slug} post={post} />
				) : (
					<FirstPost key={post.slug} post={post} />
				),
			)}
		</Flex>
	)
}

export default async function Page() {
	const posts = await blogueData
	return (
		<MainColumn>
			<Flex align="center" direction="row" justifyContent="space-between">
				<H1>Blogue</H1>
				<RSSLink />
			</Flex>
			<Posts posts={posts} />
		</MainColumn>
	)
}

function RSSLink() {
	return (
		<a
			className={css({
				alignItems: 'center',
				color: 'link',
				display: 'flex',
				gap: '5px',
			})}
			href="/rss.xml"
			rel="noreferrer"
			target="_blank"
		>
			<Box fontSize="small">RSS</Box>
			<FaRss size="20px" />
		</a>
	)
}
