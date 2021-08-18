import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeHE: ParliamentChamber = {
  name: "Landtag",
  abbr: "LT",
  groups: [
    {
      name: "LINKE-Fraktion",
      parties: [
        "LINKE",
      ],
    },
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
    CDU: 40,
    Grüne: 29,
    SPD: 29,
    AfD: 17,
    FDP: 11,
    LINKE: 9,
    Independent: 2,
  },
};

export default legislativeHE;
