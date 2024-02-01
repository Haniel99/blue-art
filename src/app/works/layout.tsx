import { Container } from "@chakra-ui/react"
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Blue Art - Works"
};
const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Layout;