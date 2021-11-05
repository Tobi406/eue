const optStr = (optional: string | undefined, mod: (input: string) => string) => {
  if (optional !== undefined) return mod(optional);
  return "";
};

export default optStr;
