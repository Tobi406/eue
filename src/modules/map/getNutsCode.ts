import allNuts from "src/data/nuts/all.json";

const getNutsCode = (taName: string) => {
  return allNuts.find(({ NAME_LATN }) =>
    NAME_LATN.split(' ').includes(taName)
    || taName.split(' ').includes(NAME_LATN)
    || NAME_LATN.startsWith(taName)
    || taName.startsWith(NAME_LATN)
  )?.NUTS_ID;
};

export default getNutsCode;
