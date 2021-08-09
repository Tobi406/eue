import Body from "./Body";

interface Executive extends Body {
  state: string,
  coalition: string[],
}

export interface Executives {
  [key: string]: Executive,
}

export default Executive;
