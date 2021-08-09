import Parliament, { MultipleChambers, ParliamentChamber } from "src/data/models/Parliament";
import { getParty } from "../parties";
import parties from "./parties";

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
      color: getParty('SPÖ').color,
      parties: [
        "GRÜNE",
        {
          SPÖ: 10,
        },
      ],
    },
    {
      name: "Ohne Klub",
      abbr: "OK",
      color: "#EDD1A4",
      parties: [
        "Independent",
        "SPÖ"
      ],
    },
    //{
    //  name: "Klub der Grünen",
    //  abbr: "Grüne-Klub",
    //  color: getParty('GRÜNE').color,
    //  parties: [
    //    "GRÜNE",
    //  ],
    //},
    {
      name: "Klub von NEOS",
      abbr: "NEOS-Klub",
      color: getParty('NEOS').color,
      parties: [
        "NEOS",
        {
          SPÖ: 5,
        }
      ],
    },
    {
      name: "Klub der FPÖ",
      abbr: "FPÖ-Klub",
      color: getParty('FPÖ').color,
      parties: [
        "FPÖ",
      ],
    },
    {
      name: "Klub der ÖVP",
      abbr: "ÖVP-Klub",
      color: getParty('ÖVP').color,
      parties: [
        "ÖVP",
        {
          SPÖ: 4
        }
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
      color: getParty('SPÖ').color,
      parties: [
        "SPÖ",
      ],
    },
    {
      name: "Bundesratsfraktion der ÖVP",
      abbr: "ÖVP",
      color: getParty('ÖVP').color,
      parties: [
        "ÖVP",
      ],
    },
    {
      name: "Bundesratsfraktion der Grünen",
      abbr: "GRÜNE",
      color: getParty('GRÜNE').color,
      parties: [
        "GRÜNE",
      ],
    },
    {
      name: "Freiheitliche Bundesratsfraktion",
      abbr: "FPÖ",
      color: getParty('FPÖ').color,
      parties: [
        "FPÖ",
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
