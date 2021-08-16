import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveKTN from "./executive";
import legislativeKTN from "./legislative";

const taKTN: TerritorialAuthority = {
  name: "Kärnten",
  officialName: "Land Kärnten",
  executive: executiveKTN,
  legislative: legislativeKTN,
};

export default taKTN;
