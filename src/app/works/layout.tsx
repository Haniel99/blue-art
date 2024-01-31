import { Container } from "@chakra-ui/react"


const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <Container>
        {children}
    </Container>
}

export default Layout;