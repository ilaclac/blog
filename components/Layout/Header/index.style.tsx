import styled from "styled-components";
import theme from "@styles/theme";

const { colors, size } = theme;

export const Container = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  background-color: antiquewhite;
  margin-bottom: ${size.S};
  border-bottom: 1px solid;
  z-index: 99;
  padding: ${size.S} 0;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
    font-size: ${size.M};
  }
  span {
    font-size: ${size.M};
  }
  li {
    display: inline-flex;
    margin: 0 ${size.M};
    color: ${colors.secondary};
  }
`;
