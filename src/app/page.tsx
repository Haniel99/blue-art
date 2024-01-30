'use client'
import { Box, Button, useColorMode, useColorModeValue, Text, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import OneSignal from "react-onesignal";

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
    <Container maxW={'580px'}>
      <Box
        borderRadius="lg"
        textAlign="center"
        p={3}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hola, soy un desarrollador de aplicaciones
      </Box>
      
    </Container>
  )
}
export default Home;
