import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executive from "./executive";
import legislative from "./legislative";

const ta: TerritorialAuthority = {
  name: "Oberbayern",
  officialName: "Bezirk Oberbayern",
  executive: executive,
  legislative: legislative,
};

export default ta;
