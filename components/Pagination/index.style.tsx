import styled from "styled-components";
import theme from "@styles/theme";

const { size } = theme;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-top: ${size.L};
`;
