import { MemberState } from "src/data/models/TerritorialAuthority";
import seatsAT from "./ep";
import bundesregierung from "./executive";
import parliament from "./legislative";
import taBGLD from "./subdivisions/BGLD/territorialAuthority";
import taKTN from "./subdivisions/KTN/territorialAuthority";
import taNÖ from "./subdivisions/NÖ/territorialAuthority";
import taOÖ from "./subdivisions/OÖ/territorialAuthority";
import taSBG from "./subdivisions/SBG/territorialAuthority";
import taSTMK from "./subdivisions/STMK/territorialAuthority";
import taT from "./subdivisions/T/territorialAuthority";
import taVBG from "./subdivisions/VBG/territorialAuthority";
import taW from "./subdivisions/W/territorialAuthority";

const memberStateAT: MemberState = {
  name: "Österreich, Austria",
  abbr: "AT",
  officialName: "Republic of Austria, Republik Österreich",
  executive: bundesregierung,
  legislative: parliament,
  subdivisions: {
    BGLD: taBGLD,
    KTN: taKTN,
    NÖ: taNÖ,
    OÖ: taOÖ,
    SBG: taSBG,
    STMK: taSTMK,
    T: taT,
    VBG: taVBG,
    W: taW,
  },
  headOfState: "GRÜNE",
  epDelegation: seatsAT,
};

export default memberStateAT;
