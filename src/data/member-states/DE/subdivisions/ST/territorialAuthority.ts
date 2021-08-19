import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveST from "./executive";
import legislativeST from "./legislative";

const taST: TerritorialAuthority = {
  name: "Sachsen-Anhalt",
  abbr: "ST",
  officialName: "Land Sachsen-Anhalt",
  executive: executiveST,
  legislative: legislativeST,
};

export default taST;
