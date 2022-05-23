import styled from "styled-components";
import theme from "@styles/theme";
import { InnerWrapper } from "@components/Layout/index.style";

const { colors, size } = theme;

export const Container = styled(InnerWrapper)`
  background-color: ${colors.secondary};
  border-radius: ${size.L};
  margin: ${size.M} auto;
  padding: ${size.M} 0;
`;
