import { MDXRemote } from "next-mdx-remote";
import { useRouter } from "next/router";
import { FC, ReactElement, ReactNode } from "react";
import Link from "src/common/Link";
import Text from "src/common/Text";
import { getParty } from "src/data/member-states/parties";
import { MultipleChambers, ParliamentChamber } from "src/data/models/Parliament";
import TerritorialAuthority, { MemberState } from "src/data/models/TerritorialAuthority";
import styled from "styled-components";
import useMap from "../map/hooks/useMap";
import ParliamentDiagram from "../parliamentDiagram";
import PartyDisplay from "../partyDisplay";
import optStr from "../util/optStr";

const RenderChamber: FC<{
  chamber: ParliamentChamber,
}> = ({ chamber }) => {
  return (
    <ParliamentDiagram
      title={`${chamber.name} ${optStr(chamber?.abbr, abbr => `(${abbr})`)}`}
      seats={chamber.seats}
      groups={chamber.groups}
    />
  )
};

const ChamberContainer = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Break = styled.div`
  flex: 100%;
`;

const renderHOS = (ms: MemberState) => {
  const { files } = ms;

  if (files !== undefined && 'hos.mdx' in files) {
    return <MDXRemote {...files['hos.mdx']} scope={{
      party: <PartyDisplay party={getParty(ms.headOfState)} />,
    }} />;
  }
  return <></>;
};


const TerritorialAuthorityDisplay: FC<{
  ta: TerritorialAuthority,
}> = ({ ta }): ReactElement => {
  const executive = ta.executive;
  const legislative = ta.legislative;
  const legislativeType: "bicameral" | "unicameral" = 'chambers' in legislative ? "bicameral" : "unicameral";
  const isMemberState = 'epDelegation' in ta;
  const router = useRouter();
  const currentPath = router.asPath
    .split(/[?#]/)
    [0];
  const { 'member-state': memberState } = router.query;

  const Map = useMap();

  console.log(ta)

  return (
    <>
      <Text
        type="h2"
      >
        {`${ta.name} (${ta.officialName}${optStr(ta?.abbr, abbr => `, ${abbr}`)})`}
      </Text>
      <Map
        nutsCode={ta.nutsCode ?? (memberState as string)}
      />
      {isMemberState && renderHOS(ta as MemberState)}
      <ParliamentDiagram
        title={`${executive.name} ${optStr(executive?.abbr, abbr => `(${abbr})`)}`}
        seats={executive.seats}
      />
      <Text>
        The government is currently headed by someone from <PartyDisplay party={getParty(executive.head)} /> <br />
        {executive.coalition.length > 0 && <>It is a government of {executive.coalition
          .map<ReactNode>(coalitionPartner => <PartyDisplay party={getParty(coalitionPartner)} />)
          .reduce((prev, cur) => ([prev, ', ', cur]))}</>}
      </Text>
      {legislativeType === "unicameral"
        ? <RenderChamber chamber={(legislative as ParliamentChamber)} />
        : <ChamberContainer>
            <Text type="h3">{`${legislative.name} ${optStr(legislative?.abbr, abbr => `(${abbr})`)}`}</Text>
            <Break />
            {(legislative as MultipleChambers).chambers.map((chamber, index) => <RenderChamber
              key={index}
              chamber={chamber}
            />)}
          </ChamberContainer>
      }
      {isMemberState && <ParliamentDiagram
        title="European Parliament Delegation"
        seats={(ta as MemberState).epDelegation}
      />}
      {typeof ta?.subdivisions !== "undefined" && <>
        <Text type="h3">
          Subdivisions
        </Text>
        <ul>
          {Object.entries(ta.subdivisions).map(([identifier, subdivision], index) => {
            return <li key={index}>
              <Link href={`${currentPath}/subdivisions/${identifier}`}>
                {subdivision.name}
              </Link>
            </li>;
          })}
        </ul>
      </>}
    </>
  );
}

export default TerritorialAuthorityDisplay;
