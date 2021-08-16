import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeBGLD: ParliamentChamber = {
  name: "Landtag",
  groups: [
    {
      name: "GRÜNE-Klub",
      parties: [
        "GRÜNE",
      ],
    },
    {
      name: "SPÖ-Klub",
      parties: [
        "SPÖ",
      ],
    },
    {
      name: "Freie Abgeordnete",
      parties: [
        "Independent",
      ],
    },
    {
      name: "FPÖ-Klub",
      parties: [
        "FPÖ",
      ],
    },
    {
      name: "ÖVP-Klub",
      parties: [
        "ÖVP",
      ],
    },
  ],
  seats: {
    SPÖ: 19,
    ÖVP: 11,
    FPÖ: 3,
    GRÜNE: 2,
    Independent: 1,
  },
};

export default legislativeBGLD;
