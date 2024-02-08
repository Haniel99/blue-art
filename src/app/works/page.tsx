"use client"
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "@/components/section";
import { WorkGridItem } from "@/components/grid-item";
import thumbnailg_practica from "../../../public/gestor_practicas.jpg";
import thumbnailteapro from "../../../public/teapro.jpg";

const Page = () => {

    return (
        <Container>
            <Heading as={"h3"} fontSize={20} >
                Trabajos
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={4}  >
                <Section
                >
                    <WorkGridItem
                        category="works"
                        title="Sistema gestion de practicas docentes"
                        thumbnail={thumbnailg_practica}
                        id={"uta"}
                    >
                        Este sistema ha sido desarrollado específicamente para la
                        Universidad de Tarapara, enfocándose en el área de docencia.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        category="works"
                        title="TEAPro"
                        thumbnail={thumbnailteapro}
                        id={"teapro"}
                    >
                        TEAPro es una aplicación dedicada a la entrega de opciones accesibles 
                        de orientación y terapia profesional.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Page;