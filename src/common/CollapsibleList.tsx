import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ReactNode, useState } from "react";
import styled, { css } from "styled-components";
import Icon from "./Icon";

interface ColorProps {
  color?: string,
};
const ColorCSS = css<ColorProps>`
  ${props => props.color && css`
    border-left: 5px solid ${props.color};
  `}
`;
const ULCSS = css`
  margin: 0 10px;
  padding: 0;
  list-style-type: none;
  ${ColorCSS}
`;
export const UnorderedList = styled.ul`
  ${ULCSS}
`;
const CollapsibleUL = styled.ul<{
  open: boolean,
} & ColorProps>`
  display: none;
  max-height: 0px;
  transition: height 1s;
  ${props => props.open && css`
    display: block;
    max-height: unset;
  `}
  ${ULCSS}
`;
export const ListItem = styled.li<ColorProps>`
  ${ColorCSS}
`;
const ListInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CollapsibleList = ({
  children,
  listItem,
  defaultOpen = false,
  color,
}: {
  children?: ReactNode,
  listItem: ReactNode,
  defaultOpen?: boolean,
  color?: string,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <>
      <ListItem onClick={() => setOpen(!open)} color={color}>
        <ListInfo>
          {listItem}
          {children && <Icon
            icon={open ? faChevronDown : faChevronRight}
            transition={true}
          />}
        </ListInfo>
      </ListItem>
      <CollapsibleUL open={open} color={color}>
        {children}
      </CollapsibleUL>
    </>
  );
};

export default CollapsibleList;
