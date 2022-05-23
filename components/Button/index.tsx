import React, { MouseEventHandler, ReactNode } from "react";
import { StyledButton } from "@components/Button/index.style";

type Props = {
  children?: ReactNode;
  onClick?: MouseEventHandler;
};

const Button = ({ children, onClick, ...rest }: Props) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
