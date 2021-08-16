import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeVBG: ParliamentChamber = {
  name: "Landtag",
  groups: [
    {
      name: "Sozialdemokratischer Landtagsklub Vorarlberg",
      abbr: "SPÖ-Klub",
      parties: [
        "SPÖ",
      ],
    },
    {
      name: "Grüner Klub im Vorarlberger Landtag",
      abbr: "GRÜNE-Klub",
      parties: [
        "GRÜNE",
      ],
    },
    {
      name: "NEOS Landtagsklkub",
      abbr: "NEOS-Klub",
      parties: [
        "NEOS",
      ],
    },
    {
      name: "VP-Landtagsklub Vorarlberg",
      abbr: "VP-Klub",
      parties: [
        "ÖVP",
      ],
    },
    {
      name: "Freiheitlicher Landtagsklub",
      abbr: "FPÖ-Klub",
      parties: [
        "FPÖ",
      ],
    },
  ],
  seats: {
    ÖVP: 17,
    GRÜNE: 7,
    FPÖ: 5,
    SPÖ: 4,
    NEOS: 3,
  },
};

export default legislativeVBG;
