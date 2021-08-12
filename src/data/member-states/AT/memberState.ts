import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import bundesregierung from "./executive";
import parliament from "./legislative";
import taW from "./subdivisions/W/territorialAuthority";

const memberStateAT: TerritorialAuthority = {
  name: "Österreich, Austria",
  abbr: "AT",
  officialName: "Republic of Austria, Republik Österreich",
  executive: bundesregierung,
  legislative: parliament,
  subdivisions: {
    W: taW,
  },
}

export default memberStateAT;
