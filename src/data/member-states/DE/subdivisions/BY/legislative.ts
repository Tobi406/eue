import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeBY: ParliamentChamber = {
  name: "Landtag",
  abbr: "LT",
  groups: [
    {
      name: "Grüne-Fraktion",
      parties: [
        "Grüne",
      ],
    },
    {
      name: "SPD-Fraktion",
      parties: [
        "SPD",
      ],
    },
    {
      name: "FDP-Fraktion",
      parties: [
        "FDP",
      ],
    },
    {
      name: "FW-Fraktion",
      parties: [
        "FW",
      ],
    },
    {
      name: "CSU-Fraktion",
      parties: [
        "CSU",
      ],
    },
    {
      name: "fraktionslos",
      parties: [
        "Independent",
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
    Grüne: 38,
    SPD: 22,
    AfD: 19,
    FDP: 11,
    FW: 27,
    CSU: 84,
    Independent: 4,
  },
};

export default legislativeBY;
