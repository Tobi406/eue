import Executive from "src/data/models/Executive";

const bundesregierung: Executive = {
  name: "Bundesregierung",
  abbr: "BReg",
  coalition: [
    "CDU",
    "CSU",
    "SPD",
  ],
  head: "CDU",
  seats: {
    CDU: 7,
    SPD: 6,
    CSU: 3,
  },
};

export default bundesregierung;
