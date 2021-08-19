import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveSH from "./executive";
import legislativeSH from "./legislative";

const taSH: TerritorialAuthority = {
  name: "Schleswig-Holstein",
  abbr: "SH",
  officialName: "Land Schleswig-Holstein",
  executive: executiveSH,
  legislative: legislativeSH,
};

export default taSH;
