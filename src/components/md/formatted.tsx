import { A } from '../elements/a'
import { Blockquote } from '../elements/blockquote'
import { H1 } from '../elements/h1'
import { H2 } from '../elements/h2'
import { H3 } from '../elements/h3'
import { Ol } from '../elements/ol'
import { P } from '../elements/p'
import { Ul } from '../elements/ul'
import { MD } from './core'

export const mdComponents = {
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
	return <MD components={mdComponents}>{children}</MD>
}
