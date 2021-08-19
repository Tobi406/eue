import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveNI from "./executive";
import legislativeNI from "./legislative";

const taNI: TerritorialAuthority = {
  name: "Niedersachsen",
  abbr: "NI",
  officialName: "Land Niedersachsen",
  executive: executiveNI,
  legislative: legislativeNI,
};

export default taNI;
