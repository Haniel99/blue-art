import { extendTheme } from "@chakra-ui/react";

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 7,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 4,
        marginBottom: 4
      }
    }
  }
}
const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};



const  styles = {
    global: {
      'html, body': {
        fontSize: "18px",
      }
    }
  }


export const theme = extendTheme({ config, components,fonts, styles });
