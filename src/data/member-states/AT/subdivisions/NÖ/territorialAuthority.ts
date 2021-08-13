import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveNÖ from "./executive";
import legislativeNÖ from "./legislative";

const taNÖ: TerritorialAuthority = {
  name: "Niederösterreich",
  officialName: "Land Niederösterreich",
  legislative: legislativeNÖ,
  executive: executiveNÖ,
};

export default taNÖ;
