import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveNW from "./executive";
import legislativeNW from "./legislative";

const taNW: TerritorialAuthority = {
  name: "Nordrhein-Westfalen",
  abbr: "NW",
  officialName: "Land Nordrhein-Westfalen",
  executive: executiveNW,
  legislative: legislativeNW,
};

export default taNW;
