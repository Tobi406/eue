const optional = <E = never, T = string>(optional: T | undefined, mod: (input: T) => T | E) => {
  if (optional !== undefined) return mod(optional);
};

export default optional;
