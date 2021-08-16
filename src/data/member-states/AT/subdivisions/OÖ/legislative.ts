import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeOÖ: ParliamentChamber = {
  name: "Landtag",
  groups: [
    {
      name: "SPÖ-Landtagsklub",
      abbr: "SPÖ-Klub",
      parties: [
        "SPÖ",
      ],
    },
    {
      name: "Klub der Grünen",
      abbr: "GRÜNE-Klub",
      parties: [
        "GRÜNE",
      ],
    },
    {
      name: "ÖVP-Landtagsklub",
      abbr: "ÖVP-Klub",
      parties: [
        "ÖVP",
      ],
    },
    {
      name: "FPÖ-Landtagsklub",
      abbr: "FPÖ-Klub",
      parties: [
        "FPÖ",
      ],
    },
  ],
  seats: {
    ÖVP: 21,
    FPÖ: 18,
    SPÖ: 11,
    GRÜNE: 6,
  },
};

export default legislativeOÖ;
