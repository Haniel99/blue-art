"use client"
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
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




const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
    }
  })
}

export const theme = extendTheme({ config, components,fonts, styles });
