import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveW from "./executive";
import legislativeW from "./legislative";

const taW: TerritorialAuthority = {
  name: "Wien",
  officialName: "Land Wien",
  legislative: legislativeW,
  executive: executiveW,
};

export default taW;
