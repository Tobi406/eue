import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeRP: ParliamentChamber = {
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
      name: "FW-Fraktion",
      parties: [
        "FW",
      ],
    },
    {
      name: "AfD-Fraktion",
      parties: [
        "AfD",
      ],
    },
  ],
  seats: {
    CDU: 31,
    SPD: 39,
    Grüne: 10,
    AfD: 9,
    FDP: 6,
    FW: 6,
  },
};

export default legislativeRP;
