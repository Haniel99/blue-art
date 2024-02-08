'use client'
import {
  Box,
  Button,
  useColorMode,
  useColorModeValue,
  Container,
  Heading,
  Link,
  List,
  ListItem
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import OneSignal from "react-onesignal";
import Section from "@/components/section";
import Paragraph from "@/components/paragraph";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "@/components/biografia";
import { IoLogoInstagram } from "react-icons/io5";
const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [oneSignalInitialized, setOneSignalInitialized] =
    useState<boolean>(false);

  const initializeOneSignal = async () => {
    if (oneSignalInitialized) {
      return
    }
    setOneSignalInitialized(true)
    try {
      await OneSignal.init({
        appId: "31925ad7-138e-4ca7-8272-b6891b10bca3",
        notifyButton: {
          enable: true,
        },
        persistNotification: true,
        allowLocalhostAsSecureOrigin: true,
      });
      await OneSignal.Slidedown.promptPush();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    initializeOneSignal();
  }, [])

  return (
    <Container>
      <Box
        borderRadius="lg"
        textAlign="center"
        p={3}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hola, soy un diseñador y desarrollador de aplicaciones-sistemas web.
      </Box>
      <Box display={{ md: "flex" }} >
        <Box flexGrow={1} >
          <Heading as="h2" variant="page-title">
            Anibal Laura
          </Heading>
          <p>Ingeniero en software ( desarrollador / diseñador ) </p>
        </Box>
        <Box>
        </Box>
      </Box>

      <Section  >
        <Heading as="h3" variant="section-title" >
          Trabajo
        </Heading>
        <Paragraph>
          Aníbal es un desarrollador completo y le apasiona crear servicios tecnológicos.
          Tiene una habilidad especial para todo lo relacionado con el lanzamiento de productos tecnológicos,
          desde la planificación, diseño y resolución de problemas de la vida real con código.
          Cuando no está en línea, le encanta disfrutar de la naturaleza y leer.
          Actualmente está en la Universidad de Tarapacá en Arica. Tiene planeado crear un
          canal de YouTube para publicar sus productos y documentar su vida. Su objetivo es
          trabajar en las mejores empresas del mundo.
        </Paragraph>
        <Box
          display="flex"
          justifyContent="center"
          my={4}>
          <Button
            as={NextLink}
            href={'/works'}
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme={useColorModeValue("green", "blue")}
          >
            Mi portafolio
          </Button>
        </Box>
      </Section>
      <Section>
        <Heading as={"h3"} variant={"section-title"} >
          Biografía
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Nacio el 30 de noviembre del 99.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Se mudo a la ciudad de Arica, Chile.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Completo la carrera de Ingenieria En Informatica, en la Universidad de
          Tarapaca de la ciudad de arica.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Comenzo a trabajar en un proyecto{' '}<Link
            href="https://teapro.cl/"
            textUnderlineOffset={3}
            target="_blank"
            color={useColorModeValue('#3d7aed', '#ff63c3')}
          >TEAPro</Link>{' '}en la empresa tecnologica de{' '}
          <Link
            href="https://kuvemar.com/"
            textUnderlineOffset={3}
            target="_blank"
            color={useColorModeValue('#3d7aed', '#ff63c3')}
          >Kuvemar</Link>
          {' '}en Arica.
        </BioSection>
      </Section>
      <Section>
        <Heading
          as={"h3"} variant={"section-title"}
        >
          Yo ♥
        </Heading>
        <Paragraph>
          Arte,
          Musica,
          Dibujo,
          Filosofia,
          Aprendizaje automatico
        </Paragraph>
      </Section>
      <Section>
        <Heading as={"h3"} variant={"section-title"} >
          Redes
        </Heading>
        <List>
          <ListItem>
            <Link
              as={NextLink}
              href="https://www.instagram.com/haniel.01/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoLogoInstagram />}
              >
                @haniel.01
              </Button>
            </Link>
          </ListItem>
        </List>

      </Section>
    </Container>
  )
}
export default Home;
