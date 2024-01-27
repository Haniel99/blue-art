"use client"
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container, Link } from '@chakra-ui/react'

//const LazyVoxelDog = dynamic(() => import('..'), {
//ssr: false,
//loading: () => < />
//})

const Main = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Anibal's homepage" />
                <meta name="author" content="Anibal Laura" />
                <meta name="author" content="blue-art" />
                <meta name="twitter:site" content="@blueart" />
                <meta name="twitter:creator" content="@blueart" />
                <meta property="og:site_name" content="Anibal Laura" />
                <meta name="og:title" content="Anibal Laura" />
                <meta property="og:type" content="website" />
                <title>Bluer Art - Homepage</title>
            </Head>

            <Box>
                Nav Bar
                <Link href='works'>Proyectos</Link>
            </Box>

            <Container maxW="container.md" pt={14}>
                <Box> Contenedor para el modelo 3d </Box>
                {children}
                <Box>Footer</Box>
            </Container>
        </Box>
    )
}

export default Main
