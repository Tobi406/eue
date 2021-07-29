import React, { FC, ReactElement } from "react";
import styled from "styled-components";

const Container = styled.footer`
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  
  @media screen and (min-width: 960px) {
    position: fixed;
  }
`;

const Footer: FC<{}> = ({ children }): ReactElement => {
  return <Container>
    {children}
  </Container>
}

export default Footer;
