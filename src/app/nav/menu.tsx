'use client'

import { A } from '@/components/elements/a'
import { Overlay } from '@/components/layouts/overlay'
import { css } from '@/generated/styled-system/css'
import {
	HStack,
	styled,
	VisuallyHidden,
	VStack,
} from '@/generated/styled-system/jsx'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

import { NavEntry } from './core'
import { navItem } from './nav-item'

const Atop = styled('div', {
	base: {
		position: 'absolute',
		top: '0',
		width: '100%',
	},
})

export function NavMenu({ entries }: { entries: NavEntry[] }) {
	const [open, setOpen] = useState(false)
	const close = () => setTimeout(() => setOpen(false), 300)
	return (
		<Dialog.Root onOpenChange={setOpen} open={open}>
			<Dialog.Trigger asChild>
				<HStack justify="end">
					<FaBars />
				</HStack>
			</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Overlay asChild>
					<Dialog.Overlay>
						<Overlay>
							<VStack height="100%" justifyContent="center">
								<VStack alignItems="stretch" gap="0">
									{entries.map(({ Titre: title, URI }) => (
										<A
											className={css(navItem)}
											href={URI}
											key={URI}
											onClick={close}
										>
											{title}
										</A>
									))}
								</VStack>
							</VStack>
							<Dialog.Close asChild>
								<Atop>
									<VStack
										alignItems="end"
										className={css(navItem)}
										gap="0px"
										justify="start"
										py="20px"
									>
										<IoClose />
										<VisuallyHidden>
											<Dialog.Title>Menu</Dialog.Title>
											<Dialog.Description>Navigation Menu</Dialog.Description>
										</VisuallyHidden>
									</VStack>
								</Atop>
							</Dialog.Close>
						</Overlay>
					</Dialog.Overlay>
				</Dialog.Overlay>
			</Dialog.Content>
		</Dialog.Root>
	)
}
