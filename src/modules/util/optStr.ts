const optStr = <T>(optional: T | undefined, mod: (input: T) => T | string) => {
  if (optional !== undefined) return mod(optional);
  return "";
};

export default optStr;
