import Executive from "src/data/models/Executive";

const bundesregierung: Executive = {
  name: "Bundesregierung",
  abbr: "BReg",
  seats: {
    ÖVP: 8,
    GRÜNE: 4,
    Independent: 3,
  },
  coalition: [
    "ÖVP",
    "GRÜNE",
  ],
};

export default bundesregierung;
