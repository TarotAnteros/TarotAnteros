import { A } from './layout/a'
import { Blockquote } from './layout/blockquote'
import { H1 } from './layout/h1'
import { H2 } from './layout/h2'
import { H3 } from './layout/h3'
import { Ol } from './layout/ol'
import { P } from './layout/p'
import { Ul } from './layout/ul'
import { MD } from './md'

const components = {
	a: A,
	blockquote: Blockquote,
	h1: H1,
	h2: H2,
	h3: H3,
	ol: Ol,
	p: P,
	ul: Ul,
}

export function FormattedMd({ children }: { children: string }) {
	return <MD components={components}>{children}</MD>
}
