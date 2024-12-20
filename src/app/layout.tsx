import type { Metadata } from "next";
import "./globals.css";
import { css } from "@/generated/styled-system/css";
import { Flex } from "@/generated/styled-system/jsx";
import { Navigation } from "./nav";

export const metadata: Metadata = {
  title: "Tarot Anteros",
  description: "Site pour Lectures de Tarot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={css({
          color: "c4",
          backgroundColor: "c0",
        })}
      >
        <Flex
          direction="column"
          gap="4rem"
          alignItems="center"
          px="10px"
          pb="10px"
        >
          <Navigation />
          {children}
        </Flex>
      </body>
    </html>
  );
}
