import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeBW: ParliamentChamber = {
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
      name: "FDP/DVP-Fraktion",
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
    Grüne: 58,
    CDU: 42,
    SPD: 19,
    FDP: 18,
    AfD: 17,
  },
};

export default legislativeBW;
