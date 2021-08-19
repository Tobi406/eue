import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeTH: ParliamentChamber = {
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
      name: "AfD-Fraktion",
      parties: [
        "AfD",
      ],
    },
  ],
  seats: {
    CDU: 21,
    SPD: 8,
    Grüne: 5,
    AfD: 22,
    LINKE: 29,
    FDP: 5,
  },
};

export default legislativeTH;
