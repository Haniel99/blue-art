import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../libs/providers";
import { ColorModeScript } from "@chakra-ui/react";
export const metadata: Metadata = {
  title: "Blue Art",
  description: "Created by developer Aníbal Luara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <ColorModeScript initialColorMode="dark" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
