import { unified } from 'unified'
import parse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeReact, { Components } from 'rehype-react'
import breaks from 'remark-breaks'
import rehypeSanitize from 'rehype-sanitize'
import * as prod from 'react/jsx-runtime'
import { ReactNode } from 'react'
import { weakCached } from '@/utils/cached'
import remarkSmartypants from 'remark-smartypants'
import remarkGfm from 'remark-gfm'
import rehypeStringify from 'rehype-stringify'

function createParser() {
	const parser = unified()
		.use(parse)
		.use(remarkGfm)
		.use(breaks)
		.use(remarkSmartypants, {
			closingQuotes: {
				double: '»',
				single: '’',
			},
			openingQuotes: {
				double: '«',
				single: '‘',
			},
		})
		.use(remarkRehype, {})
		.use(rehypeSanitize)
	return parser
}

function getParser0(components: Partial<Components>) {
	const parser = createParser().use(rehypeReact, {
		Fragment: prod.Fragment,
		jsx: prod.jsx,
		jsxs: prod.jsxs,
		components,
	})
	return parser
}
const getParser = weakCached(getParser0)

const simple = {}
export async function MD({
	components,
	children,
}: {
	components?: Partial<Components>
	children: string
}) {
	const parser = getParser(components ?? simple)
	const { result } = await parser.process(children)
	return result
}

function Frag({ children }: { children?: ReactNode }) {
	return <>{children}</>
}

export async function parseMD(md: string) {
	const result = await createParser().use(rehypeStringify).process(md)
	return String(result)
}

const frag = { p: Frag }
export function MDFrag({ children }: { children: string }) {
	return MD({ components: frag, children })
}
