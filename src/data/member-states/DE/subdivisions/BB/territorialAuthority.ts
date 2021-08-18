import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveBB from "./executive";
import legislativeBB from "./legislative";

const taBB: TerritorialAuthority = {
  name: "Brandenburg",
  abbr: "BB",
  officialName: "Land Brandenburg",
  executive: executiveBB,
  legislative: legislativeBB,
};

export default taBB;
