import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeBB: ParliamentChamber = {
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
      name: "B'90/Grüne-Fraktion",
      parties: [
        "Grüne"
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
      name: "BVB/FW-Fraktion",
      parties: [
        "BVB/FW",
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
    SPD: 25,
    CDU: 15,
    Grüne: 10,
    AfD: 23,
    LINKE: 10,
    "BVB/FW": 5,
  },
};

export default legislativeBB;
