import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveHE from "./executive";
import legislativeHE from "./legislative";

const taHE: TerritorialAuthority = {
  name: "Hessen",
  abbr: "HE",
  officialName: "Land Hessen",
  executive: executiveHE,
  legislative: legislativeHE,
};

export default taHE;
