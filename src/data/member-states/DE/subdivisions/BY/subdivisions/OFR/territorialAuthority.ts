import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executive from "./executive";
import legislative from "./legislative";

const ta: TerritorialAuthority = {
  name: "Oberfranken",
  officialName: "Bezirk Oberfranken",
  executive: executive,
  legislative: legislative,
};

export default ta;
