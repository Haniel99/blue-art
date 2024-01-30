'use client'
import { forwardRef, LegacyRef, useRef } from "react"
import { Box } from "@chakra-ui/react"
export const Spinner = () => {
    return (<>Loading</>)
}


export const VoxelRabbitContainer = forwardRef(
    ({ children, ref }: Readonly<{
        children: React.ReactNode;
        ref?: LegacyRef<HTMLDivElement>;
    }>) => {
        const reff = useRef();
        return (<Box
            ref={ref}
            m="auto"
            mt={['-20px', '-60px', '-120px']}
            mb={['-40px', '-140px', '-200px']}
            w={[280, 480, 640]}
            h={[280, 480, 640]}
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            {children}
        </Box>)
    });

export const VoxelLoader = () => {
    const reff = useRef();
    return <VoxelRabbitContainer >
        <Spinner></Spinner>
    </VoxelRabbitContainer>
}

export default VoxelLoader;