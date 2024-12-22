import { css } from '@/generated/styled-system/css'
import { SystemStyleObject } from '@/generated/styled-system/types'
import Link from 'next/link'
import { ComponentProps } from 'react'

type Styles = false | null | SystemStyleObject | undefined

function join(...args: (string | undefined)[]) {
	return args.filter(Boolean).join(' ')
}

// TODO: refine redirection
export function A({
	className,
	css: styles,
	href,
	...props
}: ComponentProps<'a'> & { css?: Styles }) {
	if (
		typeof href === 'string' &&
		(href.startsWith('/') || href.startsWith('.'))
	) {
		return (
			<Link className={join(css(styles), className)} href={href} {...props} />
		)
	}
	return (
		<a
			{...props}
			className={(css(styles), className)}
			href={href}
			target="_blank"
		/>
	)
}
