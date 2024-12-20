"use client";

import { FaBars } from "react-icons/fa";
import * as Dialog from "@radix-ui/react-dialog";
import { css } from "@/generated/styled-system/css";
import { Overlay } from "@/components/layout/overlay";
import { IoClose } from "react-icons/io5";
import { Flex, VisuallyHidden } from "@/generated/styled-system/jsx";
import Link from "next/link";
import { useState } from "react";
import { NavEntry } from "./core";
import clsx from "clsx";
import { rev } from "@/components/layout/rev";

const entry = clsx(
  rev,
  css({
    width: "100%",
    p: "10px",
    textAlign: "center",
  }),
);

export function NavMenu({ entries }: { entries: NavEntry[] }) {
  const [open, setOpen] = useState(false);
  const close = () => setTimeout(() => setOpen(false), 300);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className={css({
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        })}
      >
        <FaBars />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content>
          <Dialog.Overlay asChild>
            <Overlay px="10px">
              <Dialog.Close className={entry}>
                <VisuallyHidden>
                  <Dialog.Title>Menu</Dialog.Title>
                  <Dialog.Description>Navigation Menu</Dialog.Description>
                </VisuallyHidden>
                <Flex direction="row" justifyContent="flex-end">
                  <IoClose />
                </Flex>
              </Dialog.Close>
              <Flex
                direction="column"
                align="center"
                justifyContent="center"
                height="100%"
              >
                {entries.map(({ URI, Titre: title }) => (
                  <Link href={URI} key={URI} onClick={close} className={entry}>
                    {title}
                  </Link>
                ))}
              </Flex>
            </Overlay>
          </Dialog.Overlay>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
