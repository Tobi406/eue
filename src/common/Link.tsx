import NextLink from "next/link";
import { useRouter } from "next/router";
import { darken } from "polished";
import React, { FC, ReactElement } from "react";
import styled from "styled-components";

const StyledLink = styled.a<{
  active: boolean,
}>`
  color: ${({ theme, active }) => darken(active ? 0.125 : 0, theme.colors.primary)};
`;

const Link: FC<{
  href: string
} & React.HTMLAttributes<HTMLAnchorElement>> = ({children, ...props}): ReactElement => {
  const router = useRouter();
  const currentPath = router.asPath
    .split(/[?#]/)
    [0];

  return (
    <NextLink
      {...props}
      passHref
    >
      <StyledLink
        active={decodeURI(currentPath) === props.href}
      >
        {children}
      </StyledLink>
    </NextLink>
  )
}

export default Link; 