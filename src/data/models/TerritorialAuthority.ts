import { ReactNode } from "react";
import Executive from "./Executive";
import Parliament, { Seats } from "./Parliament";
import Nameable from "./util/Nameable";

interface TerritorialAuthority extends Nameable {
  officialName: string,
  executive: Executive,
  legislative: Parliament,
  subdivisions?: TerritorialAuthorities,
  nutsCode?: string,
}

export interface MemberState extends TerritorialAuthority {
  headOfState: string,
  epDelegation: Seats,
}

export interface MemberStates {
  [key: string]: MemberState,
}

export interface TerritorialAuthorities {
  [key: string]: TerritorialAuthority,
}

export default TerritorialAuthority;
