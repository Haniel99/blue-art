'use client'
import {
    ChakraProvider,
} from '@chakra-ui/react'
import { theme } from './theme'
import Fonts from '@/components/fonts'


export function Providers({ children }: { children: React.ReactNode }) {

    return (<ChakraProvider theme={theme} >
        <Fonts />
        {children}
    </ChakraProvider>)
}
