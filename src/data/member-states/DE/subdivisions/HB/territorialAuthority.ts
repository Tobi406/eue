import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveHB from "./executive";
import legislativeHB from "./legislative";

const taHB: TerritorialAuthority = {
  name: "Bremen",
  abbr: "HB",
  officialName: "Freie Hansestadt Bremen",
  executive: executiveHB,
  legislative: legislativeHB,
};

export default taHB;
