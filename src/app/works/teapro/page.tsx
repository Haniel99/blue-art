"use client"
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, List, ListItem, useColorModeValue, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import teapro from "../../../../public/teapro.jpg";

const Page = () => {

    return (
    <Container>
        <Title>
            TEAPro <Badge>2023-</Badge>
        </Title>
        <Paragraph>
            TEAPro es una aplicación dedicada a la entrega de opciones accesibles de orientación y terapia profesional. Mas que una aplicacion dedicada a la entrega de servicio profesional, es una comunidad de personas que buscan tener una mejor calidad de vida junto a sus hijos con algun sindrome.
        </Paragraph>
        <List ml={4} my={4}>
            <ListItem>
                <Meta>Sitio Web</Meta>
                <Link
                    as={NextLink}
                    color={useColorModeValue('#3d7aed', '#ff63c3')} href={"https://www.teapro.cl/"} >https://www.teapro.cl/
                    <ExternalLinkIcon ml={2} />
                </Link>
            </ListItem>
            <ListItem>
                <Meta>Plataforma</Meta>
                <span>Windows/macOS/Linux/iOS/Android </span>
            </ListItem>
            <ListItem>
                <Meta>Pila</Meta>
                <span>Node js, Flutter, Angular</span>
            </ListItem>
        </List>
        <WorkImage thumbnail={teapro} alt="TEAPro" />
    </Container>
    )
}

export default Page;