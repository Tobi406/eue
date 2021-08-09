import Party, { Parties } from "src/data/models/Party";
import partiesAll from "./all/parties";
import partiesAT from "./AT/parties";


const addIds = (parties: Party[]): Party[] => {
  return parties.map(party => ({...party, id: `${party.state}-${party.abbr ?? party.name}`}));
}

const parties: Parties = {
  AT: addIds(partiesAT),
  ALL: addIds(partiesAll),
};

export const allParties = Object.values(
  Object.values(parties)
    .reduce((a, b) => ([
      ...a,
      ...b,
    ]))
);

export const getParty = (partyId: string, state?: string) => {
  if (state !== undefined) return parties[state].find(party => (party?.abbr ?? party.name) || party.name === partyId)!;
  return allParties.find(party => ((party?.abbr ?? party.name) === partyId) || (party.name === partyId) || (party.id === partyId))!;
}

export const getPartyIndex = (partyId: string, state?: string) => {
  if (state !== undefined) return parties[state].findIndex(party => (party?.abbr ?? party.name) || party.name === partyId)!;
  return allParties.findIndex(party => ((party?.abbr ?? party.name) === partyId) || (party.name === partyId) || (party.id === partyId))!;
}
export default {
  ...parties,
}
