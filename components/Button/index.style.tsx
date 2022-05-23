import styled from "styled-components";
import theme from "@styles/theme";

const { colors, size, fonts, breakpoints } = theme;

export const StyledButton = styled.button`
  @media (min-width: ${breakpoints.initial}) {
    width: 100%;
    border: 2px solid ${colors.white};
    background: ${colors.secondary};
    color: ${theme.colors.tertiary} !important;
    cursor: pointer;
    margin: ${size.XS} 0;
    padding: ${size.XS} 0;
    font-size: ${size.M};
    font-weight: ${fonts.fontWeight.bold};
    transition: all 0.3s ease;
  }
  @media (min-width: ${breakpoints.tabletPortrait}) {
    width: 50%;
  }
`;
