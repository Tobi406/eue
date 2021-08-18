import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveBY from "./executive";
import legislativeBY from "./legislative";

const taBY: TerritorialAuthority = {
  name: "Bayern",
  abbr: "BY",
  officialName: "Freistaat Bayern",
  executive: executiveBY,
  legislative: legislativeBY,
};

export default taBY;
