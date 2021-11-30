const optStr = <T, E>(optional: T | undefined, mod: (input: T) => T | E | string) => {
  if (optional !== undefined) return mod(optional);
  return "";
};

export default optStr;
