"use client"
import { Box, Container, Flex, Stack, useColorModeValue, Link, Heading } from "@chakra-ui/react";

import Logo from "./logo";
import ThemeToggleButton from "./themeToggleButton";

const LinkItem = ({
    children, href
}: Readonly<{
    children: React.ReactNode;
    href: string;
}>) => {
    return (
        <Link
            href={href}
            p={2}
            fontSize="18px"
            fontWeight="normal"
            _hover={{
                transform: "transparent"
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
                maxW="860px"
                p={2}
            >
                <Flex align="center" >
                    <Heading
                        as="h1" size="lg" letterSpacing={'tighter'}
                        fontWeight="bold"
                    >
                        <Logo />
                    </Heading>
                </Flex>
                <Stack direction={['column', 'row']} spacing='10px'>
                    <LinkItem href="works" >
                        Creaciones
                    </LinkItem>
                    <LinkItem href="shareds" >
                        Publicaciones
                    </LinkItem>
                    <LinkItem href="images">
                        Imagenes
                    </LinkItem>
                </Stack>
                <Box display={"flex"}
                 alignItems="center"
                 >
                    <ThemeToggleButton/>
                 </Box>

            </Container>
        </Box>
    )
}

export default NavBar;