import Nameable from "./util/Nameable";
import europeanParties from "../union/parties";
import EuropeanParty from "./EuropeanParty";

interface Party extends Nameable {
  color?: string, // add better type here
  europeanParty?: string,
  europeanGroup?: string,
  state?: string, // add better type here
  id?: string,
}

export interface Parties {
  [key: string]: Party[],
}

export default Party;
