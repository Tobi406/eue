import Body from "src/data/models/Body";
import Executive from "src/data/models/Executive";

const bundesregierung: Executive = {
  name: "Bundesregierung",
  abbr: "BReg",
  seats: {
    ÖVP: 8,
    GRÜNE: 4,
    Independent: 3,
  },
  state: "AT",
  coalition: [
    "ÖVP",
    "GRÜNE",
  ],
};

export default bundesregierung;
