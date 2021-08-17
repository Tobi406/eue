import { MemberState } from "src/data/models/TerritorialAuthority";
import seatsDE from "./ep";
import bundesregierung from "./executive";
import parliamentDE from "./legislative";

const memberStateDE: MemberState = {
  name: "Deutschland, Germany",
  abbr: "DE",
  officialName: "Bundesrepublik Deutschland, Federal Republic of Germany",
  executive: bundesregierung,
  legislative: parliamentDE,
  headOfState: "SPD",
  epDelegation: seatsDE,
};

export default memberStateDE;
