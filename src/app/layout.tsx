import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { css } from "@/generated/styled-system/css";

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
            color: "bg2",
            backgroundColor: "bg4",
          }),
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
