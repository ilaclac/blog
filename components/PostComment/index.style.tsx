import styled from "styled-components";
import theme from "@styles/theme";
import RichText from "@components/RichText";

const { size, breakpoints } = theme;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: ${size.XS} auto;

  @media (min-width: ${breakpoints.initial}) {
    display: block;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: ${size.S};
`;

export const Paragraph = styled.p`
  @media (min-width: ${breakpoints.initial}) {
    display: block;
    width: 100%;
    margin: ${size.XS} 0;
    text-decoration: underline;
    text-underline-offset: 5px;
    text-transform: uppercase;
  }
  width: 200px;
  margin: 0;
  font-size: ${size.S};
  text-transform: lowercase;
`;

export const StyledRichText = styled(RichText)``;
