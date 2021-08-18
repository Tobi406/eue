import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveBE from "./executive";
import legislativeBE from "./legislative";

const taBE: TerritorialAuthority = {
  name: "Berlin",
  abbr: "BE",
  officialName: "Land Berlin",
  executive: executiveBE,
  legislative: legislativeBE,
};

export default taBE;
