import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveMV from "./executive";
import legislativeMV from "./legislative";

const taMV: TerritorialAuthority = {
  name: "Mecklenburg-Vorpommern",
  abbr: "MV",
  officialName: "Land Mecklenburg-Vorpommern",
  executive: executiveMV,
  legislative: legislativeMV,
};

export default taMV;
