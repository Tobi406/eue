import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeKTN: ParliamentChamber = {
  name: "Landtag",
  groups: [
    {
      name: "SPÖ-Klub",
      parties: [
        "SPÖ",
      ]
    },
    {
      name: "Die neue Volkspartei im Kärtner Landtag",
      abbr: "ÖVP-Klub",
      parties: [
        "ÖVP",
      ],
    },
    {
      name: "Freiheitlicher Landtagsklub in Kärnten",
      abbr: "Die Freiheitlichen",
      parties: [
        "FPÖ",
      ],
    },
    {
      name: "Team Kärnten-Liste Köfer IG im Landtag",
      abbr: "Team Kärnten-Klub",
      parties: [
        "TK",
      ],
    },
  ],
  seats: {
    SPÖ: 18,
    ÖVP: 6,
    FPÖ: 9,
    TK: 3,
  },
};

export default legislativeKTN;
