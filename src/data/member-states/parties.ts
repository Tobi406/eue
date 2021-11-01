import Party, { Parties } from "src/data/models/Party";
import partiesAll from "./all/parties";
import partiesAT from "./AT/parties";
import partiesDE from "./DE/parties";


const addIds = (parties: Party[]): Party[] => {
  return parties.map(party => ({...party, id: `${party.state}-${party.abbr ?? party.name}`}));
}

const parties: Parties = {
  AT: partiesAT,
  DE: partiesDE,
  ALL: partiesAll,
};

export const allParties = (() => {
  const idParties = Object.entries(parties)
    .flatMap(([state, parties]) => parties.map(party => ({
      ...party,
      state: state,
      id: `${state}-${party.abbr ?? party.name}`,
    } as Party)));
  const allParties = idParties
    .map(party => ({
      ...party,
      idNecessary: idParties
        .filter(idParty => idParty.name !== party.name && idParty.state !== party.state)
        .some(idParty => idParty.abbr === party.abbr)
    } as Party));
  return allParties;
})();

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
