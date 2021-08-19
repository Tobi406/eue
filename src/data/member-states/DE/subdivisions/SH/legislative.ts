import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeSH: ParliamentChamber = {
  name: "Landtag",
  abbr: "LT",
  groups: [
    {
      name: "SPD-Fraktion",
      parties: [
        "SPD",
      ],
    },
    {
      name: "Grüne-Fraktion",
      parties: [
        "Grüne",
      ],
    },
    {
      name: "SSW-Fraktion",
      parties: [
        "SSW",
      ],
    },
    {
      name: "FDP-Fraktion",
      parties: [
        "FDP",
      ],
    },
    {
      name: "CDU-Fraktion",
      parties: [
        "CDU",
      ],
    },
    {
      name: "fraktionslos",
      parties: [
        "Independent",
        "AfD",
        "LKR",
      ]
    }
  ],
  seats: {
    CDU: 25,
    SPD: 21,
    Grüne: 10,
    FDP: 9,
    SSW: 3,
    AfD: 3,
    LKR: 1,
    Independent: 1,
  },
};

export default legislativeSH;
