import allNuts from "src/data/nuts/all.json";

const getNutsCode = (taName: string) => {
  return allNuts.find(({ NAME_LATN }) => NAME_LATN.split(' ').includes(taName))!.NUTS_ID;
};

export default getNutsCode;
