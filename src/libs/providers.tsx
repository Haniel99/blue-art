'use client'
import {
    ChakraProvider,
} from '@chakra-ui/react'
import { theme } from './theme'
import Fonts from '@/components/fonts'
import Layout from "../components/layouts/layout";
import { AnimatePresence } from "framer-motion";

export function Providers({ children }: { children: React.ReactNode }) {

    return (<ChakraProvider theme={theme} >
        <Fonts />
        <Layout>
            <AnimatePresence
                mode="wait"
                initial={true}
                onExitComplete={() => {
                    if (typeof window !== 'undefined') {
                        window.scrollTo({ top: 0 })
                    }
                }}
            >
                {children}
            </AnimatePresence>
        </Layout>
    </ChakraProvider>)
}
