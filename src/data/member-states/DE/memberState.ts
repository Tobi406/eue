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
import taNI from "./subdivisions/NI/territorialAuthority";
import taNW from "./subdivisions/NW/territorialAuthority";
import taRP from "./subdivisions/RP/territorialAuthority";
import taSH from "./subdivisions/SH/territorialAuthority";
import taSL from "./subdivisions/SL/territorialAuthority";
import taSN from "./subdivisions/SN/territorialAuthority";
import taST from "./subdivisions/ST/territorialAuthority";
import taTH from "./subdivisions/TH/territorialAuthority";

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
    NI: taNI,
    NW: taNW,
    RP: taRP,
    SL: taSL,
    SN: taSN,
    ST: taST,
    SH: taSH,
    TH: taTH,
  },
  headOfState: "SPD",
  epDelegation: seatsDE,
};

export default memberStateDE;
