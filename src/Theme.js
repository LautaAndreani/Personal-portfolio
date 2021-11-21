import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#232325",
        color: "#DEDEDE",
      },
    },
  },
  colors: {
    brand: {
      bg: "#232325",
      nav: "#343436",
      title: "#4787E6",
      git: "#F4CBB2",
      text: "#DEDEDE",
    },
  },
});

export default theme;
