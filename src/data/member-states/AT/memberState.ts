import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import bundesregierung from "./executive";
import parliament from "./legislative";
import taNÖ from "./subdivisions/NÖ/territorialAuthority";
import taW from "./subdivisions/W/territorialAuthority";

const memberStateAT: TerritorialAuthority = {
  name: "Österreich, Austria",
  abbr: "AT",
  officialName: "Republic of Austria, Republik Österreich",
  executive: bundesregierung,
  legislative: parliament,
  subdivisions: {
    W: taW,
    NÖ: taNÖ,
  },
}

export default memberStateAT;
