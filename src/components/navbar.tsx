"use client"
import { Box, Container, Flex, Stack, useColorModeValue, Link, Heading } from "@chakra-ui/react";

import Logo from "./logo";

const LinkItem = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Link
            href="/works"
            p={2}
            fontSize="18px"
            fontWeight="normal"
            _hover={{
                fontWeight:"semibold"

            }}
        >
            {children}
        </Link>
    )
}

const NavBar = () => {
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
        >
            <Container
                display="flex"
                justifyContent='space-between'
                w="100%"
                maxW="container.md"
                p={4}
            >
                <Flex align="center" >
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack direction={['column', 'row']} spacing='10px'>
                    <LinkItem>
                        Creaciones
                    </LinkItem>
                </Stack>
                <Box>Modo de color</Box>

            </Container>
        </Box>
    )
}

export default NavBar;