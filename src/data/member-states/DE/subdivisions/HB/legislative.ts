import { getParty } from "src/data/member-states/parties";
import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeHB: ParliamentChamber = {
  name: "Bürgerschaft",
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
      name: "Gruppe Magnitz, Runge, Felgenträger",
      color: getParty('AfD').color,
      parties: [
        "Independent",
      ],
    },
    {
      name: "fraktionslos",
      color: getParty('Independent').color,
      parties: [
        "AfD",
        "BUW",
        "LKR",
      ]
    }
  ],
  seats: {
    SPD: 23,
    Grüne: 16,
    LINKE: 10,
    CDU: 24,
    FDP: 5,
    Independent: 3,
    AfD: 1,
    BIW: 1,
    LKR: 1,
  },
};

export default legislativeHB;
