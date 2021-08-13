import Body from "./Body";

interface Executive extends Body {
  coalition: string[],
  head: string,
}

export interface Executives {
  [key: string]: Executive,
}

export default Executive;
