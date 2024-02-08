"use client"
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import uta from "../../../../public/gestor_practicas.jpg"

const Page = () => {

    return (
        <Container>
            <Title>
                Gestion de practicas docentes<Badge>2023-</Badge>
            </Title>
            <Paragraph>
                Esta aplicacion fue desarrollada en la universidad de tarapaca, el principal objetivo es ayudar en la gestion de tarea importantes relaciondos con las practicas profesionales de las carreras de docencia.
            </Paragraph>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Sitio Web</Meta>
                    <Link
                        as={NextLink}
                        color={useColorModeValue('#3d7aed', '#ff63c3')} href={"https://www.uta.cl/"} >https://www.uta.cl/
                        <ExternalLinkIcon ml={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Plataforma</Meta>
                    <span>Google chrome, Fire fox, etc</span>
                </ListItem>
                <ListItem>
                    <Meta>Pila</Meta>
                    <span>Node js, Angular</span>
                </ListItem>
            </List>
            <WorkImage thumbnail={uta} alt="UTA work" />
        </Container>
    )
}

export default Page;