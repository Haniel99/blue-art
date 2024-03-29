import { Box } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'
import { LegacyRef, MutableRefObject, forwardRef } from "react";
export const VolxelSpinner = () => {
    return (<Spinner key={2} size="md" />)
}
export const VoxelRabbitContainer =
    forwardRef(({ children }: Readonly<{
        children: React.ReactNode
    }>, ref?: LegacyRef<HTMLDivElement> | undefined) => {
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

VoxelRabbitContainer.displayName = "VoxelRabbitContainer";

export const VoxelLoader = () => {
    return <VoxelRabbitContainer
    >
        <VolxelSpinner />
    </VoxelRabbitContainer>
}

export default VoxelLoader;