import { createGlobalStyle } from "styled-components";
import theme from "@styles/theme";

const { fonts, breakpoints, size, colors } = theme;

export const GlobalStyle = createGlobalStyle`

  // * {
  // outline: 2px dotted black;
  //}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${colors.tertiary};
    background-color: ${colors.tertiary};
  }

  h1, h2, h3 {
    margin: ${size.L} 0 ${size.M} 0;
    font-weight: ${fonts.fontWeight.bold};
    font-family: ${fonts.family.primary};
    color: ${colors.tertiary};
  }

  h1 {
    @media (min-width: ${breakpoints.initial}) {
      font-size: ${size.L};
    }
    @media (min-width: ${breakpoints.tabletLandscape}) {
      font-size: ${size.XL};
    }
  }

  h2 {
    font-size: ${size.M};
    @media (min-width: ${breakpoints.initial}) {
      font-size: ${size.L};
    }
  }

  h3 {
    margin: ${size.S} 0 ${size.S} 0;
    font-size: ${size.S};
    @media (min-width: ${breakpoints.initial}) {
      font-size: ${size.M};
    }
  }

  a {
    transition: all 0.3s ease;
    color: white;

    &:link {
      color: ${colors.white}
    }
    &:hover,
    &:focus {
      color: ${colors.primary};
      transition: ease-in-out .3s;
    }
  }

  p, span, a, input {
    font-family: ${fonts.family.secondary};
    @media (min-width: ${breakpoints.initial}) {
      font-size: ${size.S};
    }
    @media (min-width: ${breakpoints.tabletLandscape}) {
      font-size: ${size.M};
    }
  }
`;
