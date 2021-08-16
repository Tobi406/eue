import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveBGLD from "./executive";
import legislativeBGLD from "./legislative";

const taBGLD: TerritorialAuthority = {
  name: "Burgenland",
  officialName: "Land Burgenland",
  executive: executiveBGLD,
  legislative: legislativeBGLD,
}

export default taBGLD;
