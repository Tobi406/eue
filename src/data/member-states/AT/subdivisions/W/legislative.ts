import Parliament from "src/data/models/Parliament";

const legislativeW: Parliament = {
  name: "Landtag",
  groups: [
    {
      name: "Klub der SPÖ",
      abbr: "SPÖ-Klub",
      parties: [
        "SPÖ"
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
      name: "Klub der GRÜNEN",
      abbr: "GRÜNE-Klub",
      parties: [
        "GRÜNE",
      ],
    },
    {
      name: "Klub der ÖVP",
      abbr: "ÖVP-Klub",
      parties: [
        "ÖVP",
      ],
    },
    {
      name: "Klub der FPÖ",
      abbr: "FPÖ-Klub",
      parties: [
        "FPÖ",
      ],
    },
  ], 
  seats: {
    SPÖ: 46,
    NEOS: 8,
    GRÜNE: 16,
    ÖVP: 22,
    FPÖ: 8,
  },
};

export default legislativeW;
