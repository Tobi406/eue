import EuropeanParty from "src/data/models/EuropeanParty";


const europeanParties: EuropeanParty[] = [
  {
    name: "Party of the European Left",
    abbr: "PEL",
    color: "#b71c1c",
  },
  {
    name: "Party of European Socialists",
    abbr: "PES",
    color: "#F0001C",
  },
  {
    name: "European Green Party",
    abbr: "EGP",
    color: "#57B45F",
  },
  {
    name: "European Free Alliance",
    abbr: "EFA",
    color: "#80329b",
  },
  {
    name: "Alliance of Liberals and Democrats for Europe Party",
    abbr: "ALDE",
    color: "gold",
  },
  {
    name: "European Democratic Party",
    abbr: "EDP",
    color: "#F39200",
  },
  {
    name: "European People's Party",
    abbr: "EPP",
    color: "#0155A0",
  },
  {
    name: "European Christian Political Movement",
    abbr: "ECPM",
    color: "#8BC34A",
  },
  {
    name: "European Conservatives and Reformists Party",
    abbr: "ECR",
    color: "#1666A5",
  },
  {
    name: "Identity and Democraty Party",
    abbr: "ID",
    color: "#253D79",
  },
  {
    name: "Not-Aligned",
    abbr: "NA",
    color: "#c5c5c5",
  },
];

export const getEuropeanParty = (partyId: string) => {
  return europeanParties.find(party => (party.abbr === partyId) || (party.name === partyId))!;
}

export const getEuropeanPartyIndex = (partyId: string) => {
  return europeanParties.findIndex(party => (party.abbr === partyId) || (party.name === partyId))!;
}

export default europeanParties;
