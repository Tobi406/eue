import { FC, Fragment, ReactElement } from "react";
import { useSelector } from "react-redux";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import Link from "src/common/Link";
import memberStates from "src/data/member-states/memberStates";
import { RootState } from "src/store";
import styled, { css } from "styled-components";

const Container = styled.aside<{
  sidebarOpen: boolean
}>`
  flex: 1 1 15%;
  top: 0;
  z-index: 100;
  position: sticky;
  left: -100%;
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
    position: absolute;
    transition: left .5s;

    ${props => props.sidebarOpen && css`
      left: 0;
    `}
  }
`;

const Sidebar: FC<{}> = (): ReactElement => {
  const sidebarOpen = useSelector((state: RootState) => state.sidebar.sidebarOpen);

  return <>
    <Container
      sidebarOpen={useSelector((state: RootState) => state.sidebar.sidebarOpen)}
    >
      <ul>
        {Object.entries(memberStates).map(([ms, msInfo], index) => <Fragment key={index}>
          <li>
            <Link
              href={`/member-states/${ms}`}
            >
              {msInfo.name}
            </Link>
          </li>
          {typeof msInfo?.subdivisions !== "undefined" && <ul>
            {Object.entries(msInfo.subdivisions).map(([sd, sdInfo], index) => <Fragment key={index}>
              <li>
                <Link
                  href={`/member-states/${ms}/subdivisions/${sd}`}
                >
                  {sdInfo.name}
                </Link>
              </li>
            </Fragment>)}
          </ul>}
        </Fragment>)}
      </ul>
    </Container>
    {sidebarOpen && <RemoveScrollBar />}
  </>
}

export default Sidebar;
