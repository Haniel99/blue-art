"use client"
import { Box, Container, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { Metadata } from "next";
import Section from "@/components/section";
import { WorkGridItem } from "@/components/grid-item";
import thumbnailg_practica from "../../../public/g_practicas1.png";
import thumbnailteapro from "../../../public/teapro1.jpeg";
const Page = () => {
    return (
        <Container>
            <Heading as={"h3"} fontSize={20} >
                Trabajos
            </Heading>
            <SimpleGrid columns={1} gap={6} >
                <Section
                >
                    <WorkGridItem
                        category="works"
                        title="Sistema gestion de practicas docentes"
                        thumbnail={thumbnailg_practica}
                        id={"g-practices"}
                    >
                        Este sistema ha sido desarrollado específicamente para la
                        Universidad de Tarapara, enfocándose en el área de docencia.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        category="works"
                        title="teapro"
                        thumbnail={thumbnailteapro}
                        id={"teapro"}
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quas, hic deserunt, fugiat odit optio eius itaque velit neque ducimus quis reprehenderit pariatur facere iusto nulla facilis molestias incidunt? Adipisci.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>

    )
}

export default Page;