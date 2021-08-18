import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeMV: ParliamentChamber = {
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
    {
      name: "fraktionslos",
      parties: [
        "Independent",
      ],
    },
  ],
  seats: {
    SPD: 26,
    CDU: 18,
    LINKE: 11,
    AfD: 14,
    Independent: 2,
  },
};

export default legislativeMV;
