"use client"
import { Box, Container, Flex, Stack, useColorModeValue, Link, Heading } from "@chakra-ui/react";
import NextLink from "next/link"
import { usePathname } from "next/navigation";
import Logo from "./logo";
import ThemeToggleButton from "./themeToggleButton";

const LinkItem = ({
    children, href
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
            borderBottom={pathname == href ? '2px' : ''}
            borderColor={color}
            fontWeight="normal"
            _hover={{
                borderBottom: '2px'
            }
            }
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
                <Stack direction={['column', 'row']} spacing='10px'>
                    <LinkItem href="/works" key="works" >
                        Proyectos
                    </LinkItem>
                    <LinkItem href="/activities" key="activities" >
                        publicaciones
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