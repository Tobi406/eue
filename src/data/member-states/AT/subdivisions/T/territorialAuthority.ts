import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveT from "./executive";
import legislativeT from "./legislative";

const taT: TerritorialAuthority = {
  name: "Tirol",
  officialName: "Land Tirol",
  executive: executiveT,
  legislative: legislativeT,
};

export default taT;
