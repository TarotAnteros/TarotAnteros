import type { Metadata } from "next";
import "./globals.css";
import { css } from "@/generated/styled-system/css";
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
    <html
      lang="fr"
      className={css({
        fontSize: "133.33%",
        color: "c4",
        backgroundColor: "c0",
        fontFamily: "printclearly",
      })}
    >
      <body
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: "1rem",
        })}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
