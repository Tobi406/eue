import Nameable from "./util/Nameable";

interface MemberState extends Nameable {
  officialName: string,
}

export interface MemberStates {
  [key: string]: MemberState,
}

export default MemberState;
