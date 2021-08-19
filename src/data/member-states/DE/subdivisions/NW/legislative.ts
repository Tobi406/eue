import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeNW: ParliamentChamber = {
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
      name: "CDU-Fraktion",
      parties: [
        "CDU",
      ],
    },
    {
      name: "FDP-Fraktion",
      parties: [
        "FDP",
      ],
    },
    {
      name: "AfD-Fraktion",
      parties: [
        "AfD",
      ],
    },
    {
      name: "fraktionslos",
      parties: [
        "Independent",
      ],
    },
  ],
  seats: {
    CDU: 72,
    SPD: 69,
    Grüne: 14,
    FDP: 13,
    AfD: 28,
    Independent: 3,
  },
};

export default legislativeNW;
