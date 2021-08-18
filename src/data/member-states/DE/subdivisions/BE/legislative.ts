import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeBE: ParliamentChamber = {
  name: "Abgeordnetenhaus",
  abbr: "AGH",
  groups: [
    {
      name: "LINKE-Fraktion",
      parties: [
        "LINKE",
      ],
    },
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
      name: "fraktionslos",
      parties: [
        "Independent",
        "FW",
        "NPD",
        {
          AfD: 1,
        },
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
    SPD: 38,
    Grüne: 27,
    AfD: 23,
    LINKE: 27,
    FDP: 11,
    NPD: 1,
    FW: 1,
    Independent: 1,
  },
};

export default legislativeBE;
