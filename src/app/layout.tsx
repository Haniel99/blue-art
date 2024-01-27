import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../libs/providers";
import { Box, ColorModeScript, Container } from "@chakra-ui/react";
import NavBar from "@/components/navbar";
import Article from "@/libs/article";
export const metadata: Metadata = {
  title: "Blue Art - Homepage"
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
          <Box as="main">
            <NavBar></NavBar>
            <Container maxW="container.md" pt={12} >
              <div  className="flex h-80 bg-slate-800
              items-center justify-center 
              "  >
                Modelo
              </div>
              <Article>
                {children}
              </Article>
              <Box>Footer</Box>
            </Container>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
