import TerritorialAuthority from "src/data/models/TerritorialAuthority";
import executiveBY from "./executive";
import legislativeBY from "./legislative";
import taOB from "./subdivisions/OB/territorialAuthority";
import taNB from "./subdivisions/NB/territorialAuthority";
import taOPF from "./subdivisions/OPF/territorialAuthority";
import taOFR from "./subdivisions/OFR/territorialAuthority";
import taMFR from "./subdivisions/MFR/territorialAuthority";
import taUFR from "./subdivisions/UFR/territorialAuthority";
import taSCHW from "./subdivisions/SCHW/territorialAuthority";

const taBY: TerritorialAuthority = {
  name: "Bayern",
  abbr: "BY",
  officialName: "Freistaat Bayern",
  executive: executiveBY,
  legislative: legislativeBY,
  subdivisions: {
    OB: taOB,
    NB: taNB,
    OPF: taOPF,
    OFR: taOFR,
    MFR: taMFR,
    UFR: taUFR,
    SCHW: taSCHW,
  },
  subdivisionsType: 2,
};

export default taBY;
