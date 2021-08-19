import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveSL from "./executive";
import legislativeSL from "./legislative";

const taSL: TerritorialAuthority = {
  name: "Saarland",
  abbr: "SL",
  officialName: "Land Saarland",
  executive: executiveSL,
  legislative: legislativeSL,
};

export default taSL;
