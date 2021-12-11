import { darken } from "polished";
import { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;

  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: ${darken(0.125, 'white')};
  }
`;

const Button = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>((props, ref) => {
  return (
    <StyledButton
      ref={ref}
      {...props}
    />
  );
});

export default Button;
