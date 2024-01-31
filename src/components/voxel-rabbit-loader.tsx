import { Box } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'
export const VolxelSpinner = () => {
    return (<Spinner key={2} size="md" />)
}
export const VoxelRabbitContainer = 
    ({ children }: Readonly<{
        children: React.ReactNode;
    }>) => {
        return (<Box
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
    };

export const VoxelLoader = () => {
    return <VoxelRabbitContainer >
        <VolxelSpinner/>
    </VoxelRabbitContainer>
}

export default VoxelLoader;