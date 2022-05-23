import type { DefaultTheme } from "styled-components";

const size = {
  XS: "8px",
  S: "16px",
  M: "24px",
  L: "32px",
  XL: "40px",
  XXL: "48px",
  XXXL: "56px",
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      white: string;
      black: string;
    };
    layout: {
      width: string;
      widthMax: string;
      contentWidth: string;
    };
    breakpoints: {
      initial: number;
      mobile: string;
      tabletPortrait: string;
      tabletLandscape: string;
      desktop: string;
    };
    fonts: {
      family: {
        primary: string;
        secondary: string;
      };
      fontWeight: {
        regular: number;
        bold: number;
      };
    };
    size: {
      XS: string;
      S: string;
      M: string;
      L: string;
      XL: string;
      XXL: string;
      XXXL: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "#FC766AFF",
    secondary: "#78394BFF",
    tertiary: "#F1AC88FF",
    white: "#fff",
    black: "#000",
  },
  layout: {
    width: "100%",
    widthMax: "1000px",
    contentWidth: "700px",
  },
  breakpoints: {
    initial: 0,
    mobile: "400px",
    tabletPortrait: "600px",
    tabletLandscape: "900px",
    desktop: "1200px",
  },
  fonts: {
    family: {
      primary: `'Lato', sans-serif`,
      secondary: `'Karla', sans-serif`,
    },
    fontWeight: {
      regular: 400,
      bold: 700,
    },
  },
  size,
};

export default theme;
