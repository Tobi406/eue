import Body from "./Body";
import Nameable from "./util/Nameable";

export interface Seats {
  [key: string]: number,
}

export type GroupParties = string | Seats;

export interface Group extends Nameable {
  color?: string,
  parties: GroupParties[],
}

export interface Legislatives {
  [key: string]: Parliament,
}

export interface ParliamentChamber extends Body {
  groups: Group[],
}

export enum ChamberType {
  Higher = "HIGHER",
  Lower = "LOWER",
}

export type MultipleChambersChamber = ParliamentChamber & {
  type: ChamberType,
}

export interface MultipleChambers extends Nameable {
  chambers: MultipleChambersChamber[],
}

type Parliament = ParliamentChamber | MultipleChambers;

export default Parliament;
