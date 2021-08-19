import { getParty } from "src/data/member-states/parties";
import { ParliamentChamber } from "src/data/models/Parliament";

const legislativeSL: ParliamentChamber = {
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
      color: getParty('Independent').color,
      parties: [
        {
          AfD: 1,
          LINKE: 1,
        }
      ]
    }
  ],
  seats: {
    CDU: 24,
    SPD: 17,
    LINKE: 7,
    AfD: 3,
  },
};

export default legislativeSL;
