import { ReactElement } from "react";
import Link from "src/common/Link";
import Text from "src/common/Text";
import { allParties, getPartyLink } from "src/data/member-states/parties";
import optional from "src/modules/util/optStr";
import styled, { css } from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
`;

const PartyBox = styled.div<{
  color?: string,
}>`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  padding: 3px;

  ${(props) => props.color && css`border: 3px solid ${props.color};`}
  color: black;
`;

const Flag = styled.img`
  width: 30px;
`;

const Parties = () => {
  return (
    <>
      <Text type="h2">
        Parties
      </Text>
      <Grid>
        {allParties
          .filter(party => party.state !== "ALL")
          .map(party => <Link
            href={`/parties/${encodeURIComponent(getPartyLink(party))}`}
          >
            <PartyBox
              color={party.color}
            >
              <Text fontWeight={350}>{party.name}</Text>
              {optional<string, ReactElement>(party.abbr, abbr => <Text>({abbr})</Text>)}
              {(party.europeanGroup || party.europeanParty) && (party.europeanGroup && party.europeanParty) ? <Text>
                {party.europeanGroup} - {party.europeanParty}
              </Text> : <Text>
                {optional(party.europeanGroup, group => group)}
                {optional(party.europeanParty, party => party)}
              </Text>}
              <Flag src={`https://flag.pk/flags/4x3/${(party.state ?? 'EU').toLowerCase()}.svg`} />
            </PartyBox>
          </Link>)
        }
      </Grid>
    </>
  );
};

export default Parties;
