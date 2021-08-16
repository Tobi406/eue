import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveVBG from "./executive";
import legislativeVBG from "./legislative";

const taVBG: TerritorialAuthority = {
  name: "Vorarlberg",
  officialName: "Land Vorarlberg",
  executive: executiveVBG,
  legislative: legislativeVBG,
};

export default taVBG;
