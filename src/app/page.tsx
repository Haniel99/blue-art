'use client'
import { Box, Button, useColorMode, useColorModeValue, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import OneSignal from "react-onesignal";
import Layout from "@/components/layouts/article";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [oneSignalInitialized, setOneSignalInitialized] =
    useState<boolean>(false)
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

  const color = useColorModeValue('red', 'red')

  return (
    <Layout>
      <Box as="main" p={12}  >
        <Box>
          <Text> Enviar notificaciones </Text>
        </Box>
        <Button onClick={toggleColorMode}>
          Cambiar color {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Box>
    </Layout>

  )
}

export default Home;
