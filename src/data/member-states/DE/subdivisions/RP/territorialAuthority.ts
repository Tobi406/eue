import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveRP from "./executive";
import legislativeRP from "./legislative";

const taRP: TerritorialAuthority = {
  name: "Rheinland-Pfalz",
  abbr: "RP",
  officialName: "Land Rheinland-Pfalz",
  executive: executiveRP,
  legislative: legislativeRP,
};

export default taRP;
