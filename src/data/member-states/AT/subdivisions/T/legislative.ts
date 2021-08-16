import parties from "src/data/member-states/parties";
import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeT: ParliamentChamber = {
  name: "Landtag",
  groups: [
    {
      name: "Klub der SPÖ",
      abbr: "SPÖ-Klub",
      parties: [
        "SPÖ",
      ],
    },
    {
      name: "Klub der Grünen",
      abbr: "GRÜNE-Klub",
      parties: [
        "GRÜNE"
      ]
    },
    {
      name: "Klub von FRITZ",
      abbr: "FRITZ-Klub",
      parties: [
        "FRITZ",
      ],
    },
    {
      name: "Klub der FPÖ",
      abbr: "FPÖ-Klub",
      parties: [
        "FPÖ",
      ],
    },
    {
      name: "Klub der NEOS",
      abbr: "NEOS-Klub",
      parties: [
        "NEOS",
      ],
    },
    {
      name: "Klub der Volkspartei Tirol",
      abbr: "VP Tirol",
      parties: [
        "ÖVP",
      ],
    },
  ],
  seats: {
    ÖVP: 17,
    SPÖ: 6,
    FPÖ: 5,
    GRÜNE: 4,
    NEOS: 2,
    FRITZ: 2,
  },
};

export default legislativeT;
