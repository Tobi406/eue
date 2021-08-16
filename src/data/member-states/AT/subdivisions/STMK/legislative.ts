import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeSTMK: ParliamentChamber = {
  name: "Landtag",
  groups: [
    {
      name: "KPÖ Landtagsklub",
      abbr: "KPÖ-Klub",
      parties: [
        "KPÖ",
      ],
    },
    {
      name: "SPÖ Landtagsklub",
      abbr: "SPÖ-Klub",
      parties: [
        "SPÖ",
      ],
    },
    {
      name: "Landtagsklub der Grünen",
      abbr: "GRÜNE-Klub",
      parties: [
        "GRÜNE",
      ],
    },
    {
      name: "NEOS Landtagsklub",
      abbr: "NEOS-Klub",
      parties: [
        "NEOS",
      ],
    },
    {
      name: "ÖVP Landtagsklub",
      abbr: "ÖVP-Klub",
      parties: [
        "ÖVP",
      ],
    },
    {
      name: "FPÖ Landtagsklub",
      abbr: "FPÖ-Klub",
      parties: [
        "FPÖ",
      ],
    },
  ],
  seats: {
    ÖVP: 18,
    SPÖ: 12,
    FPÖ: 8,
    GRÜNE: 6,
    NEOS: 2,
    KPÖ: 2,
  },
};

export default legislativeSTMK;
