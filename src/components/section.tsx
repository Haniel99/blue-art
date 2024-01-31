import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import React from "react";


const StyleDiv = chakra(motion.div, {
    shouldForwardProp: (prop: string) => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
});

const Section = ({ children }:
    Readonly<{ children: React.ReactNode }>, delay: number) => (
    <StyleDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={'0.8 ease'}
        mb={6}
    >
        {children}
    </StyleDiv>
)

export default Section;