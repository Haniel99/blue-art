'use client'
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"


const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()
    return (
        <AnimatePresence mode="wait" initial={false} >
            <motion.div
            key={useColorModeValue('light', 'dark')}
            initial={ { y: 20, opacity: 0 } }
            animate= { { y:0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={ { duration: 0.3 }}
            >
                <IconButton
                    aria-label="Toggle theme"
                    colorScheme={useColorModeValue('blue', 'green')}
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}
                >
                </IconButton>
            </motion.div>
        </AnimatePresence>
    )
}


export default ThemeToggleButton;