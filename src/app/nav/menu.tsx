'use client'

import { rev } from '@/components/layouts/rev'
import { css } from '@/generated/styled-system/css'
import { Box, Flex, VisuallyHidden } from '@/generated/styled-system/jsx'
import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

import { NavEntry } from './core'

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
							<Flex
								align="center"
								direction="column"
								height="100%"
								justifyContent="center"
							>
								<Flex direction="column">
									{entries.map(({ Titre: title, URI }) => (
										<Link
											className={clsx(
												rev,
												css({
													p: '10px',
													width: '100%',
												}),
											)}
											href={URI}
											key={URI}
											onClick={close}
										>
											{title}
										</Link>
									))}
								</Flex>
							</Flex>
							<Box position="absolute" top="0" width="100%">
								<Dialog.Close className={css({ width: '100%' })}>
									<VisuallyHidden>
										<Dialog.Title>Menu</Dialog.Title>
										<Dialog.Description>Navigation Menu</Dialog.Description>
									</VisuallyHidden>
									<Flex
										className={rev}
										direction="row"
										justifyContent="flex-end"
										px="10px"
										py="20px"
									>
										<IoClose />
									</Flex>
								</Dialog.Close>
							</Box>
						</Dialog.Overlay>
					</Dialog.Overlay>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
