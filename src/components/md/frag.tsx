import { ReactNode } from 'react'

import { MD } from './core'

function Frag({ children }: { children?: ReactNode }) {
	return <>{children}</>
}

const frag = { p: Frag }

export function MDFrag({ children }: { children: string }) {
	return MD({ children, components: frag })
}
