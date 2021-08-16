import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveSTMK from "./executive";
import legislativeSTMK from "./legislative";

const taSTMK: TerritorialAuthority = {
  name: "Steiermark",
  officialName: "Land Steiermark",
  executive: executiveSTMK,
  legislative: legislativeSTMK,
};

export default taSTMK;
