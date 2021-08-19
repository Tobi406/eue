import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveTH from "./executive";
import legislativeTH from "./legislative";

const taTH: TerritorialAuthority = {
  name: "Thüringen",
  abbr: "TH",
  officialName: "Freistaat Thüringen",
  executive: executiveTH,
  legislative: legislativeTH,
};

export default taTH;
