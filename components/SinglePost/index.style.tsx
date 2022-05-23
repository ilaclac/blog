import styled from "styled-components";
import theme from "@styles/theme";
import RichText from "@components/RichText";

const { colors, size } = theme;
export const Container = styled.div`
  background-color: ${colors.secondary};
  border-radius: ${size.L};
  margin: 100px 0;
  padding: ${size.M} 0;
  display: block;
  width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;
export const StyledRichText = styled(RichText)`
  font-size: ${size.L};
`;
