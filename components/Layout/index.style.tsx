import styled from "styled-components";
import theme from "@styles/theme";

interface StyledInner {
  width?: string;
  maxWidth?: string;
}

export const InnerWrapper = styled.div<StyledInner>`
  margin: 0 auto;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : theme.layout.widthMax)};
  text-align: left;
  position: relative;
  padding: 0 16px;
`;
