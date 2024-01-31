"use client"
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { Metadata } from "next";
import Section from "@/components/section";
import { WorkGridItem } from "@/components/grid-item";
import image from "../../../public/test-image.png";

const Page = () => {
    return (
        <Container>
            <Heading as={"h3"} fontSize={20} >
                Trabajos
            </Heading>
            <SimpleGrid column={[1, 1, 2]} gap={6} >
                <Section>
                    <WorkGridItem
                        category="works"
                        title="TEAPro"
                        thumbnail={image}
                        id={"teapro"}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt nam, neque inventore vel sequi reiciendis, sapiente sunt eum perspiciatis quam, dignissimos asperiores fugit alias quas atque quibusdam et. Quae!
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        category="works"
                        title="teapro"
                        thumbnail={image}
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