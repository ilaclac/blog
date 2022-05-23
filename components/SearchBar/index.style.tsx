import styled from "styled-components";
import theme from "@styles/theme";

const { size } = theme;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  max-width: 300px;
  ::-webkit-input-placeholder {
    text-align: center;
  }
  :-moz-placeholder {
    text-align: center;
  }
  ::-moz-placeholder {
    text-align: center;
  }
  :-ms-input-placeholder {
    text-align: center;
  }
  margin-top: ${size.M};
  height: ${size.XL};
  border: none;
  border-radius: ${size.L};
  padding: 0 ${size.L};
`;
