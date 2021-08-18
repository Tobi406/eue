import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveHH from "./executive";
import legislativeHH from "./legislative";

const taHH: TerritorialAuthority = {
  name: "Hamburg",
  abbr: "HH",
  officialName: "Freie und Hansestadt Hamburg",
  executive: executiveHH,
  legislative: legislativeHH,
};

export default taHH;
