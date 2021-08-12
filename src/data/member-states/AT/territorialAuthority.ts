import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import bundesregierung from "./executive";
import parliament from "./legislative";

const territorialAuthorityAT: TerritorialAuthority = {
  name: "Österreich, Austria",
  abbr: "AT",
  officialName: "Republic of Austria, Republik Österreich",
  executive: bundesregierung,
  legislatives: parliament,
}

export default territorialAuthorityAT;
