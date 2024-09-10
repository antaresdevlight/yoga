import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const breakpoints = {
  base: "0px", // 0px
  sm: "320px", // ~480px. em is a relative unit and is dependant on the font size.
  md: "768px", // ~768px
  lg: "1024px", // ~992px
  lgs: "1300px",
  xl: "1440px", // ~1280px
  xxl: "1650px", // ~1536px
};

export const theme = extendTheme({ colors, breakpoints });

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
