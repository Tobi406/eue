import { getParty } from "src/data/member-states/parties";
import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeST: ParliamentChamber = {
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
      color: getParty('Independent').color,
      parties: [
        {
          Independent: 1,
          LKR: 1,
          AfD: 3,
        }
      ],
    },
  ],
  seats: {
    CDU: 30,
    SPD: 11,
    Grüne: 5,
    AfD: 24,
    LINKE: 16,
    LKR: 1,
    Independent: 1,
  },
};

export default legislativeST;
