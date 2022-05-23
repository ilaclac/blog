import styled from "styled-components";
import theme from "@styles/theme";

const { colors, breakpoints, size } = theme;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SinglePostWrapper = styled.div`
  background-color: ${colors.secondary};
  border-radius: ${size.L};
  margin: ${size.M} 0;
  padding: ${size.M};
`;

export const Title = styled.h2`
  margin-top: 0;
  text-transform: capitalize;

  @media (min-width: ${breakpoints.initial}) {
    font-size: ${size.M};
  }
  @media (min-width: ${breakpoints.tabletPortrait}) {
    font-size: ${size.L};
  }
`;
