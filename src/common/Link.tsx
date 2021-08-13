import NextLink from "next/link";
import React, { FC, Props, ReactElement } from "react";
import { defaultProps } from "react-select/src/Select";
import styled from "styled-components";

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
`;

const Link: FC<{
  href: string
} & React.HTMLAttributes<HTMLAnchorElement>> = ({children, ...props}): ReactElement => {
  return (
    <NextLink {...props} passHref>
      <StyledLink>
        {children}
      </StyledLink>
    </NextLink>
  )
}

export default Link; 