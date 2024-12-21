'use client'

import { A } from '@/components/elements/a'
import { Overlay } from '@/components/layouts/overlay'
import { css } from '@/generated/styled-system/css'
import {
	Box,
	HStack,
	VisuallyHidden,
	VStack,
} from '@/generated/styled-system/jsx'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

import { NavEntry } from './core'
import { navItem } from './nav-item'

const atop = css({
	position: 'absolute',
	top: '0',
	width: '100%',
})

export function NavMenu({ entries }: { entries: NavEntry[] }) {
	const [open, setOpen] = useState(false)
	const close = () => setTimeout(() => setOpen(false), 300)
	return (
		<Dialog.Root onOpenChange={setOpen} open={open}>
			<Dialog.Trigger
				className={css({
					display: 'flex',
					justifyContent: 'flex-end',
					width: '100%',
				})}
			>
				<FaBars />
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Content>
					<Dialog.Overlay asChild>
						<Dialog.Overlay>
							<Overlay
								alignItems="center"
								direction="column"
								display="flex"
								height="100%"
								justifyContent="center"
							>
								<VStack gap="0">
									{entries.map(({ Titre: title, URI }) => (
										<A
											className={css(
												{
													p: '10px',
													width: '100%',
												},
												navItem,
											)}
											href={URI}
											key={URI}
											onClick={close}
										>
											{title}
										</A>
									))}
								</VStack>
								<Box className={atop}>
									<Dialog.Close className={css({ width: '100%' })}>
										<HStack
											className={css(navItem)}
											gap="0px"
											justify="end"
											px="10px"
											py="20px"
										>
											<VisuallyHidden>
												<Dialog.Title>Menu</Dialog.Title>
												<Dialog.Description>Navigation Menu</Dialog.Description>
											</VisuallyHidden>
											<IoClose />
										</HStack>
									</Dialog.Close>
								</Box>
							</Overlay>
						</Dialog.Overlay>
					</Dialog.Overlay>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
