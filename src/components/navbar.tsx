"use client"
import { Box, Container, Flex, Stack, useColorModeValue, Link, Heading } from "@chakra-ui/react";
import NextLink from "next/link"
import { usePathname } from "next/navigation";
import Logo from "./logo";
import ThemeToggleButton from "./theme-toggle-button";
import { IoLogoGithub } from "react-icons/io5";

const LinkItem = ({
    children, href, ...props
}: Readonly<{
    children: React.ReactNode;
    href: string;
}>) => {
    const pathname = usePathname()
    const color = useColorModeValue("black", "white")
    return (
        <Link
            as={NextLink}
            href={href}
            p={2}
            fontWeight="normal"
            textDecoration={pathname == href ? "underline" : "none"}
            textUnderlineOffset={10}
            _hover={{
                textDecoration: "underline",
            }}
            {...props}
        >
            {children}
        </Link >
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
                <Stack
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    direction={['column', 'row']}
                    spacing='10px'
                >
                    <LinkItem href="/works" key="works" >
                        Proyectos
                    </LinkItem>
                    <LinkItem href="/activities" key="activities" >
                        publicaciones
                    </LinkItem>
                    <LinkItem
                        href="https://github.com/Haniel99" key={"sourse"}
                    >
                        <Box
                            display={"flex"}
                            gap={1}
                            alignItems={"center"}
                        >
                            <IoLogoGithub />
                            Repositorio
                        </Box>
                    </LinkItem>
                </Stack>
                <Box display={"flex"}
                    alignItems="center"
                >
                    <ThemeToggleButton />
                </Box>
            </Container>
        </Box>
    )
}

export default NavBar;