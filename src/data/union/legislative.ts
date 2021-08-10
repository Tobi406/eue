import seatsAT from "../member-states/AT/ep";
import { ParliamentChamber, Group, Seats } from "../models/Parliament";
import { getEuropeanParty } from "./parties";

export type EPGroup = Omit<Group, 'parties'>;

const groups: EPGroup[] = [
  {
    name: "The Left group in the European Parliament- GUE/NGL",
    abbr: "GUE/NGL",
    color: getEuropeanParty('PEL').color,
  },
  {
    name: "Group of the Progressive Alliance of Socialists and Democrats in the European Parliament",
    abbr: "S&D",
    color: getEuropeanParty('PES').color,
  },
  {
    name: "Group of the Greens/European Free Alliance",
    abbr: "G/EFA",
    color: getEuropeanParty('EGP').color,
  },
  {
    name: "Renew Europe Group",
    abbr: "RE",
    color: getEuropeanParty('ALDE').color,
  },
  {
    name: "Group of the Europen People's Party (Christian Democrats)",
    abbr: "EPP",
    color: getEuropeanParty('EPP').color,
  },
  {
    name: "European Conservatives and Reformists Group",
    abbr: "ECR",
    color: getEuropeanParty('ID').color,
  },
  {
    name: "Identity and Democracy Group",
    abbr: "ID",
    color: getEuropeanParty('ID').color,
  },
  {
    name: "Non-Inscrits",
    abbr: "NI",
    color: "#c5c5c5",
  },
];

const seats: Seats = {
  ...seatsAT,
};

const parliament: Omit<ParliamentChamber, 'groups'> & {
  groups: EPGroup[],
} = {
  name: "European Parliament",
  abbr: "EP",
  groups: groups,
  seats: seats,
};

export const getEPGroup = (groupId: string) => {
  return groups.find(group => (group?.abbr ?? group.name) === groupId)!;
};

export const getEPGroupIndex = (groupId: string) => {
  return groups.findIndex(group => (group?.abbr ?? group.name) === groupId)!;
};
export const epGroups = groups;

export default parliament;
