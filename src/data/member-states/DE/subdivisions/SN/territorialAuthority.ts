import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveSN from "./executive";
import legislativeSN from "./legislative";

const taSN: TerritorialAuthority = {
  name: "Sachsen",
  abbr: "SN",
  officialName: "Freistaat Sachsen",
  executive: executiveSN,
  legislative: legislativeSN,
};

export default taSN;
