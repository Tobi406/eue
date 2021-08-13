import { MemberState } from "src/data/models/TerritorialAuthority";
import seatsAT from "./ep";
import bundesregierung from "./executive";
import parliament from "./legislative";
import taNÖ from "./subdivisions/NÖ/territorialAuthority";
import taW from "./subdivisions/W/territorialAuthority";

const memberStateAT: MemberState = {
  name: "Österreich, Austria",
  abbr: "AT",
  officialName: "Republic of Austria, Republik Österreich",
  executive: bundesregierung,
  legislative: parliament,
  subdivisions: {
    W: taW,
    NÖ: taNÖ,
  },
  headOfState: "GRÜNE",
  epDelegation: seatsAT,
}

export default memberStateAT;
