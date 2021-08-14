import { Group, MultipleChambers, ParliamentChamber } from "../models/Parliament";
import TerritorialAuthority, { MemberState, MemberStates } from "../models/TerritorialAuthority";
import memberStateAT from "./AT/memberState";
import { getParty } from "./parties";

const addGroupColor = (group: Group) => {
  if (group.parties.length === 1 && group.color === undefined && typeof group.parties[0] === "string") {
    const party = getParty(group.parties[0]);
    if (party.color !== undefined) {
      group.color = party.color;
    }
  }
  return group;
}

const addDefaultColors = (ta: TerritorialAuthority) => {
  let legislative = ta.legislative;
  if ('chambers' in legislative) {
    legislative = legislative as MultipleChambers;
    legislative.chambers = legislative.chambers.map(chamber => {
      chamber.groups = chamber.groups.map(addGroupColor); 
      return chamber;
    });
  } else {
    legislative = legislative as ParliamentChamber;
    legislative.groups = legislative.groups.map(addGroupColor);
  }
  if (ta.subdivisions !== undefined) {
    ta.subdivisions = Object.fromEntries(
      Object.entries(ta.subdivisions)
        .map(([key, value]) => ([key, addDefaultColors(value)]))
    );
  }
  return ta;
}

let memberStates: MemberStates = {
  AT: memberStateAT,
};

memberStates = Object.fromEntries(
  Object.entries(memberStates)
  .map(([key, value]) => ([key, addDefaultColors(value) as MemberState]))
);

export default memberStates;
