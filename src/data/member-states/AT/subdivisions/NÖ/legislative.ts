import Parliament from "src/data/models/Parliament";

const legislativeNÖ: Parliament = {
  name: "Landtag",
  groups: [
    {
      name: "fraktionslos",
      parties: [
        "Independent",
      ],
    },
    {
      name: "Landtagsfraktion der NEOS Niederösterreich",
      abbr: "NEOS",
      parties: [
        "NEOS",
      ],
    },
    {
      name: "Freiheitlicher Klub im NÖ Landtag",
      abbr: "FPÖ",
      parties: [
        "FPÖ",
      ],
    },
    {
      name: "Klub der Sozialdemokratischen Landtagsabgeordneten Niederösterreichs",
      abbr: "SPÖ",
      parties: [
        "SPÖ",
      ],
    },
    {
      name: "Landtagsklub der Volkspartei Niederösterreich",
      abbr: "ÖVP",
      parties: [
        "ÖVP",
      ],
    },
    {
      name: "Die Grünen im NÖ Landtag",
      abbr: "GRÜNE",
      parties: [
        "GRÜNE",
      ],
    },
  ],
  seats: {
    ÖVP: 29,
    SPÖ: 13,
    FPÖ: 7,
    GRÜNE: 3,
    NEOS: 3,
    Independent: 1,
  },
};

export default legislativeNÖ;
