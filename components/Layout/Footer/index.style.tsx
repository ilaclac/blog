import styled from "styled-components";
import theme from "@styles/theme";

const { colors, size } = theme;

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
  padding: ${size.S} 0;
  color: ${colors.secondary};
  width: 100%;
  min-height: 200px;
  margin-top: 30vh;
  bottom: -100%;
`;
