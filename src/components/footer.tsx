import { Box } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box display="flex" justifyContent="center" opacity={0.4} fontSize={"small"}>
            &copy; {new Date().getFullYear()} Anibal Laura. Todos los derechos reservados.
        </Box>
    )
}

export default Footer;