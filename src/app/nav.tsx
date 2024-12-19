import { Box, Cq, Flex, VisuallyHidden } from "@/generated/styled-system/jsx";
import { FaBars } from "react-icons/fa";
import * as Dialog from "@radix-ui/react-dialog";
import { css } from "@/generated/styled-system/css";
import { Overlay } from "@/components/overlay";
import { IoClose } from "react-icons/io5";
import { ReactNode } from "react";
import { textesDuSiteData } from "@/airtable/textes-du-site";

async function NavEntries({
  Item,
}: {
  Item: ({ URI, title }: { URI: string; title: string }) => ReactNode;
}) {
  const data = await textesDuSiteData;
  return (
    <>
      {data.map((item) => (
        <Item key={item.URI} URI={item.URI} title={item.Titre} />
      ))}
    </>
  );
}

function NavMenu() {
  return (
    <Dialog.Root>
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
              <Dialog.Close className={css({ width: "100%" })}>
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
                gap={"20px"}
                justifyContent="center"
                height="100%"
              >
                <NavEntries
                  Item={({ URI, title }) => (
                    <Dialog.Close>
                      <a href={"#" + URI}>{title}</a>
                    </Dialog.Close>
                  )}
                />
              </Flex>
            </Overlay>
          </Dialog.Overlay>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function NavBar() {
  return (
    <Flex direction="row" gap={"20px"} justify="center">
      <NavEntries Item={({ URI, title }) => <a href={"#" + URI}>{title}</a>} />
    </Flex>
  );
}

export function Navigation() {
  return (
    <Cq
      width="100%"
      position="sticky"
      top="0"
      pt="5px"
      pb="10px"
      backgroundColor="c0"
    >
      <Box display={{ base: "block", "@/menu": "none" }}>
        <NavMenu />
      </Box>
      <Box display={{ base: "none", "@/menu": "block" }}>
        <NavBar />
      </Box>
    </Cq>
  );
}
