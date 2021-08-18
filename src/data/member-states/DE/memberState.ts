import { MemberState } from "src/data/models/TerritorialAuthority";
import seatsDE from "./ep";
import bundesregierung from "./executive";
import parliamentDE from "./legislative";
import taBB from "./subdivisions/BB/territorialAuthority";
import taBE from "./subdivisions/BE/territorialAuthority";
import taBW from "./subdivisions/BW/territorialAuthority";
import taBY from "./subdivisions/BY/territorialAuthority";
import taHB from "./subdivisions/HB/territorialAuthority";
import taHE from "./subdivisions/HE/territorialAuthority";
import taHH from "./subdivisions/HH/territorialAuthority";
import taMV from "./subdivisions/MV/territorialAuthority";

const memberStateDE: MemberState = {
  name: "Deutschland, Germany",
  abbr: "DE",
  officialName: "Bundesrepublik Deutschland, Federal Republic of Germany",
  executive: bundesregierung,
  legislative: parliamentDE,
  subdivisions: {
    BW: taBW,
    BY: taBY,
    BB: taBB,
    BE: taBE,
    HB: taHB,
    HH: taHH,
    HE: taHE,
    MV: taMV,
  },
  headOfState: "SPD",
  epDelegation: seatsDE,
};

export default memberStateDE;
