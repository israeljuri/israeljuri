import { extendTheme } from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#000066",
  },
  secondary: {
    100: "#ff6600",
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const fonts = {
  body: "sans-serif",
  heading: "sans-serif",
};

const styles = {
  global: {
    body: {
      scrollBehavior: "smooth",
    },
    "body::-webkit-scrollbar": {
      width: ".3rem",
      height: ".3rem",
    },
    "body::-webkit-scrollbar-thumb": {
      background: "secondary.100",
      borderRadius: "2rem",
    },
    "body::-webkit-scrollbar-track": {},
  },
};

const noUnderline = defineStyle({
  textDecoration: "none",
  _dark: {
    textDecoration: "none",
  },
  _hover: {
    textDecoration: "none",
  },
});

const linkTheme = defineStyleConfig({
  variants: { noUnderline },
  defaultProps: {
    variant: "noUnderline",
  },
});

export const buttonTheme = defineStyleConfig({
  sizes: {
    lg: defineStyle({
      fontSize: "lg",
      px: "10",
      py: "1.8rem",
      borderRadius: "full",
    }),

    md: defineStyle({
      fontSize: "md",
      px: "10",
      py: "1.6rem",
      borderRadius: "full",
    }),
    sm: defineStyle({
      fontSize: "xs",
      px: "5",
      py: "5",
      borderRadius: "full",
    }),
  },
});

export default extendTheme({
  colors,
  fonts,
  styles,
  config,
  components: { Button: buttonTheme, Link: linkTheme },
});
