import { FC, ReactElement } from "react";
import Text from "src/common/Text";
import { MultipleChambers, ParliamentChamber } from "src/data/models/Parliament";
import TerritorialAuthority, { MemberState } from "src/data/models/TerritorialAuthority";
import styled from "styled-components";
import ParliamentDiagram from "../parliamentDiagram";
import Link from "src/common/Link";
import { useRouter } from "next/router";
import PartyDisplay from "../partyDisplay";
import { getParty } from "src/data/member-states/parties";

const optStr = (str: string | undefined, mod: (str: string) => string) => {
  return typeof str !== "undefined" ? mod(str) : '';
};

optStr('abc', str => `(${str})`);

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
  
  
  return (
    <>
      <Text
        type="h2"
      >
        {`${ta.name} (${ta.officialName}${optStr(ta?.abbr, abbr => `, ${abbr}`)})`}
      </Text>
      {isMemberState && <Text>
        The head of state of the {ta.officialName} is currently from <PartyDisplay party={getParty((ta as MemberState).headOfState)} />
      </Text>}
      <ParliamentDiagram
        title={`${executive.name} ${optStr(executive?.abbr, abbr => `(${abbr})`)}`}
        seats={executive.seats}
      />
      <Text>
        The government is currently headed by someone from <PartyDisplay party={getParty(executive.head)} />
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
