import { Container } from "@chakra-ui/react";

const ContainerBlueArtTable = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <Container
            backdropBlur={""}
        >
            {children}
        </Container>
    )
}

export default ContainerBlueArtTable;