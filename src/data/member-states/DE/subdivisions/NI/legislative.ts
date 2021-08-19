import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeA: ParliamentChamber = {
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
      ],
    },
  ],
  seats: {
    CDU: 50,
    SPD: 54,
    Grüne: 12,
    FDP: 11,
    AfD: 7,
    LKR: 2,
    Independent: 1,
  },
};

export default legislativeA;
