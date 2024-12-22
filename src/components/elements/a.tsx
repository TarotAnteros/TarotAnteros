import Link from 'next/link'
import { ComponentProps } from 'react'

// TODO: refine
// TODO: asChild
export function A({ href, ...props }: ComponentProps<'a'>) {
	if (
		typeof href === 'string' &&
		(href.startsWith('/') || href.startsWith('.'))
	) {
		return <Link href={href} {...props} />
	}
	return <a {...props} href={href} target="_blank" />
}
