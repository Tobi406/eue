import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeSN: ParliamentChamber = {
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
    CDU: 45,
    Grüne: 12,
    SPD: 10,
    LINKE: 14,
    AfD: 36,
    Independent: 2,
  },
};

export default legislativeSN;
