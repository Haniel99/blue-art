import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import { Providers } from "../libs/providers";
import { Box, ColorModeScript, Container } from "@chakra-ui/react";
import NavBar from "@/components/navbar";
import Article from "@/libs/article";
import Loading from "../components/voxel-rabbit-loader";
import Footer from "@/components/footer";

const LazyVoxel = dynamic(() => import('../components/voxel-rabbit'), { ssr: false, loading: () => <Loading></Loading> });
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
      <body >
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap"
        />
        <ColorModeScript initialColorMode="dark" />
        <Providers>
          <Box as="main" mb={6} >
            <NavBar />
            <Container maxW="container.md" pt={14} >
              <LazyVoxel />
              <Article>
                {children}
              </Article>
              <Footer />
            </Container>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
