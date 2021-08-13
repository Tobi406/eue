import { getParty } from "src/data/member-states/parties";
import Parliament from "src/data/models/Parliament";

const legislativeNÖ: Parliament = {
  name: "Landtag",
  groups: [
    {
      name: "fraktionslos",
      color: getParty('Independent').color,
      parties: [
        "Independent",
      ],
    },
    {
      name: "Landtagsfraktion der NEOS Niederösterreich",
      abbr: "NEOS",
      color: getParty('NEOS').color,
      parties: [
        "NEOS",
      ],
    },
    {
      name: "Freiheitlicher Klub im NÖ Landtag",
      abbr: "FPÖ",
      color: getParty('FPÖ').color,
      parties: [
        "FPÖ,"
      ],
    },
    {
      name: "Klub der Sozialdemokratischen Landtagsabgeordneten Niederösterreichs",
      abbr: "SPÖ",
      color: getParty('SPÖ').color,
      parties: [
        "SPÖ",
      ],
    },
    {
      name: "Landtagsklub der Volkspartei Niederösterreich",
      abbr: "ÖVP",
      color: getParty('ÖVP').color,
      parties: [
        "ÖVP",
      ],
    },
    {
      name: "Die Grünen im NÖ Landtag",
      abbr: "GRÜNE",
      color: getParty('GRÜNE').color,
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
