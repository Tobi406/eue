import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeSBG: ParliamentChamber = {
  name: "Landtag",
  groups: [
    {
      name: "SPÖ-Klub",
      parties: [
        "SPÖ",
      ],
    },
    {
      name: "GRÜNE-Klub",
      parties: [
        "GRÜNE",
      ],
    },
    {
      name: "NEOS-Klub",
      parties: [
        "NEOS",
      ],
    },
    {
      name: "ÖVP-Klub",
      parties: [
        "ÖVP",
      ],
    },
    {
      name: "FPÖ-Klub",
      parties: [
        "FPÖ",
      ]
    },
  ],
  seats: {
    ÖVP: 15,
    SPÖ: 8,
    FPÖ: 7,
    GRÜNE: 3,
    NEOS: 3,
  },
};

export default legislativeSBG;
