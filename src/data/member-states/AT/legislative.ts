import { MultipleChambers, ParliamentChamber } from "src/data/models/Parliament";

const nationalCouncil: ParliamentChamber = {
  name: "Nationalrat",
  abbr: "NR",
  seats: {
    ÖVP: 71,
    SPÖ: 40,
    FPÖ: 30,
    GRÜNE: 26,
    NEOS: 15,
    Independent: 1,
  },
  groups: [
    {
      name: "Klub der SPÖ",
      abbr: "SPÖ-Klub",
      parties: [
        "SPÖ",
      ],
    },
    {
      name: "Ohne Klub",
      abbr: "OK",
      color: "#EDD1A4",
      parties: [
        "Independent",
      ],
    },
    {
      name: "Klub der Grünen",
      abbr: "Grüne-Klub",
      parties: [
        "GRÜNE",
      ],
    },
    {
      name: "Klub von NEOS",
      abbr: "NEOS-Klub",
      parties: [
        "NEOS",
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
      name: "Klub der ÖVP",
      abbr: "ÖVP-Klub",
      parties: [
        "ÖVP",
      ],
    },
  ],
};

const federalCouncil: ParliamentChamber = {
  name: "Bundesrat",
  abbr: "BR",
  seats: {
    ÖVP: 25,
    SPÖ: 19,
    FPÖ: 11,
    GRÜNE: 5,
    NEOS: 1,
  },
  groups: [
    {
      name: "Bundesratsfraktion der SPÖ",
      abbr: "SPÖ",
      parties: [
        "SPÖ",
      ],
    },
    {
      name: "ohne Fraktionszugehörigkeit",
      abbr: "OF",
      color: "#EDD1A4",
      parties: [
        "NEOS",
      ],
    },
    {
      name: "Bundesratsfraktion der Grünen",
      abbr: "GRÜNE",
      parties: [
        "GRÜNE",
      ],
    },
    {
      name: "Bundesratsfraktion der ÖVP",
      abbr: "ÖVP",
      parties: [
        "ÖVP",
      ],
    },
    {
      name: "Freiheitliche Bundesratsfraktion",
      abbr: "FPÖ",
      parties: [
        "FPÖ",
      ],
    },
  ],
};

const parliament: MultipleChambers = {
  name: "Parlament",
  chambers: [
    nationalCouncil,
    federalCouncil,
  ],
};

export default parliament;
