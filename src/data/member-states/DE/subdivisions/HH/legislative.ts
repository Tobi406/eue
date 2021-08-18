import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeHH: ParliamentChamber = {
  name: "Bürgerschaft",
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
      name: "AfD-Fraktion",
      parties: [
        "AfD",
      ],
    },
    {
      name: "fraktionslos",
      parties: [
        "Independent",
        "FDP",
      ],
    },
  ],
  seats: {
    SPD: 54,
    Grüne: 33,
    CDU: 15,
    LINKE: 13,
    AfD: 6,
    FDP: 1,
    Independent: 1,
  },
};

export default legislativeHH;
