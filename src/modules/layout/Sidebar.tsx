import { useDispatch, useSelector } from "react-redux";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import CollapsibleList, { UnorderedList } from "src/common/CollapsibleList";
import Flag from "src/common/Flag";
import Link from "src/common/Link";
import memberStates from "src/data/member-states/memberStates";
import TerritorialAuthority, { MemberState, TerritorialAuthorities } from "src/data/models/TerritorialAuthority";
import { RootState } from "src/store";
import styled, { css } from "styled-components";
import { change } from "./sidebarSlice";

const Container = styled.aside<{
  sidebarOpen: boolean
}>`
  flex: 1 1 15%;
  top: 0;
  z-index: 100;
  position: sticky;
  left: -1000%;
  display: initial;
  overflow-y: auto;

  min-width: 108px;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.white};
  border-right: 2px solid ${({ theme }) => theme.colors.primary};
  transition: left 1.5s;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${({ theme }) => theme.colors.white};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 20px;
  }


  @media screen and (max-width: 960px) {
    position: fixed;
    transition: left .5s;

    ${props => props.sidebarOpen && css`
      left: 0;
    `}
  }
`;

const getTAsList = (territorialAuthorities: TerritorialAuthorities, parents?: string[]) => {

  const getLink = (ta: string) => {
    const joinParents = parents?.map(parent => `${parent}/subdivisions/`) ?? []; 
    return `/member-states/${joinParents.join('')}${ta}`;
  };

  const isMemberState = (ta: TerritorialAuthority) => {
    return 'epDelegation' in ta;
  }

  return (
    Object.entries(territorialAuthorities).map(([ta, taInfo]) => <CollapsibleList
      listItem={
        <Link
          href={getLink(ta)}
        >
          {isMemberState(taInfo) && <Flag src={taInfo.abbr ?? taInfo.name} />} { taInfo.name}
        </Link>
      }
    >
      {taInfo?.subdivisions !== undefined && getTAsList(taInfo.subdivisions, [...(parents ?? []), ta])}
    </CollapsibleList>)
  );
};

const Sidebar = () => {
  const sidebarOpen = useSelector((state: RootState) => state.sidebar.sidebarOpen);
  const dispatch = useDispatch();

  return <>
    <Container
      sidebarOpen={useSelector((state: RootState) => state.sidebar.sidebarOpen)}
      onClick={(e) => {
        if (window.innerWidth <= 960 && (e.target as HTMLElement).tagName === "A") dispatch(change());
      }}
    >
      <UnorderedList>
        {getTAsList(memberStates)}
      </UnorderedList>
    </Container>
    {sidebarOpen && <RemoveScrollBar />}
  </>
}

export default Sidebar;
