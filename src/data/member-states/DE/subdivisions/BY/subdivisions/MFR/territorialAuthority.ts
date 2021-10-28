import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executive from "./executive";
import legislative from "./legislative";

const ta: TerritorialAuthority = {
  name: "Mittelfranken",
  officialName: "Bezirk Mittelfranken",
  executive: executive,
  legislative: legislative,
};

export default ta;
