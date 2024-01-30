'use client'
import { lazy } from 'react'
import {
    ChakraProvider,
} from '@chakra-ui/react'
import { theme } from './theme'
const Fonts = lazy(() => import("../components/fonts"));

export function Providers({ children }: { children: React.ReactNode }) {

    return (<ChakraProvider theme={theme} >
        {children}
    </ChakraProvider>)
}
