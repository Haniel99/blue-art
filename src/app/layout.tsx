import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import { Providers } from "../libs/providers";
import { Box, ColorModeScript, Container } from "@chakra-ui/react";
import NavBar from "@/components/navbar";
import Article from "@/libs/article";
import Loading from "../components/voxel-rabbit-loader";
const LazyVoxelRabbit = dynamic(() => import('../components/voxel-rabbit'), {
  ssr: false,
  loading: () => <Loading />
})
export const metadata: Metadata = {
  title: "Blue Art - Homepage"
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  >
      <body>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap"
        />
        <ColorModeScript initialColorMode="dark" />
        <Providers>
          <Box as="main">
            <NavBar></NavBar>
            <Container maxW="container.md" pt={14} >
              <LazyVoxelRabbit />
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
