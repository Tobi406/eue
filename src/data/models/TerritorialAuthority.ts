import Executive from "./Executive";
import Parliament from "./Parliament";
import Nameable from "./util/Nameable";

interface TerritorialAuthority extends Nameable {
  officialName: string,
  executive: Executive,
  legislatives: Parliament,
  subdivisions?: TerritorialAuthorities,
}

export interface TerritorialAuthorities {
  [key: string]: TerritorialAuthority,
}

export default TerritorialAuthority;
