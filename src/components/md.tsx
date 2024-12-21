import { weakCached } from '@/utils/cached'
import { ReactNode } from 'react'
import * as prod from 'react/jsx-runtime'
import rehypeReact, { Components } from 'rehype-react'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import breaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import parse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

function createParser() {
	const parser = unified()
		.use(parse)
		.use(remarkGfm)
		.use(breaks)
		.use(remarkRehype, {})
		.use(rehypeSanitize)
	return parser
}

function getParser0(components: Partial<Components>) {
	const parser = createParser().use(rehypeReact, {
		components,
		Fragment: prod.Fragment,
		jsx: prod.jsx,
		jsxs: prod.jsxs,
	})
	return parser
}
const getParser = weakCached(getParser0)

const simple = {}
export async function MD({
	children,
	components,
}: {
	children: string
	components?: Partial<Components>
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
	return MD({ children, components: frag })
}
