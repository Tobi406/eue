import Nameable from "./util/Nameable";

interface Party extends Nameable {
  color?: string, // add better type here
  europeanParty?: string,
  europeanGroup?: string,
  state?: string, // add better type here
  id?: string,
  idNecessary?: boolean,
}

export interface Parties {
  [key: string]: Party[],
}

export default Party;
