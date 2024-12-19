import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { css } from "@/generated/styled-system/css";
import { Flex } from "@/generated/styled-system/jsx";
import { Navigation } from "./nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
        className={[
          geistSans.variable,
          geistMono.variable,
          css({
            color: "c4",
            backgroundColor: "c0",
          }),
        ].join(" ")}
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
