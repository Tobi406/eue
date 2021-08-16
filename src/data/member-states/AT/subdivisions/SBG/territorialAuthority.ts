import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveSBG from "./executive";
import legislativeSBG from "./legislative";

const taSBG: TerritorialAuthority = {
  name: "Salzburg",
  officialName: "Land Salzburg",
  executive: executiveSBG,
  legislative: legislativeSBG,
};

export default taSBG;
