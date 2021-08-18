import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveBW from "./executive";
import legislativeBW from "./legislative";

const taBW: TerritorialAuthority = {
  name: "Baden-Württemberg",
  abbr: "BW",
  officialName: "Land Baden-Württemberg",
  executive: executiveBW,
  legislative: legislativeBW,
};

export default taBW;
