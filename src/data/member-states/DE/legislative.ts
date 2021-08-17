import { MultipleChambers, ParliamentChamber } from "src/data/models/Parliament";

const bundestag: ParliamentChamber = {
  name: "Bundestag",
  abbr: "BT",
  groups: [
    {
      name: "Fraktion Die Linke",
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
      name: "Fraktion Bündnis 90/Die Grünen",
      parties: [
        "Grüne",
      ],
    },
    {
      name: "CDU/CSU-Fraktion",
      parties: [
        "CDU",
        "CSU",
      ],
    },
    {
      name: "FDP-Fraktion",
      parties: [
        "FDP",
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
        "LKR",
        "PARTEI",
      ],
    },
  ],
  seats: {
    LINKE: 69,
    SPD: 152,
    Grüne: 67,
    CDU: 200,
    CSU: 45,
    FDP: 80,
    AfD: 86,
    Independent: 5,
    LKR: 2,
    PARTEI: 1,
  },
};

const bundesrat: ParliamentChamber = {
  name: "Bundesrat",
  abbr: "Bundesrat",
  groups: [
    {
      name: "Baden-Württemberg",
      abbr: "BW",
      parties: [
        {
          Grüne: 4,
          CDU: 2,
        },
      ],
    },
    {
      name: "Bayern",
      abbr: "BY",
      parties: [
        {
          CSU: 4,
          FW: 2,
        },
      ],
    },
    {
      name: "Berlin",
      abbr: "BE",
      parties: [
        {
          SPD: 2,
          Grüne: 1,
          LINKE: 1,
        },
      ],
    },
    {
      name: "Brandenburg",
      abbr: "BB",
      parties: [
        {
          SPD: 2,
          CDU: 1,
          Grüne: 1,
        },
      ],
    },
    {
      name: "Freie Hansestadt Bremen",
      abbr: "HB",
      parties: [
        {
          SPD: 2,
          Grüne: 1,
        },
      ],
    },
    {
      name: "Hamburg",
      abbr: "HH",
      parties: [
        {
          SPD: 2,
          Grüne: 1,
        },
      ],
    },
    {
      name: "Hessen",
      abbr: "HE",
      parties: [
        {
          CDU: 3,
          Grüne: 2,
        },
      ],
    },
    {
      name: "Mecklenburg-Vorpommern",
      abbr: "MV",
      parties: [
        {
          SPD: 2,
          CDU: 1,
        },
      ],
    },
    {
      name: "Niedersachsen",
      abbr: "NI",
      parties: [
        {
          SPD: 3,
          CDU: 3,
        },
      ],
    },
    {
      name: "Nordrhein-Westfalen",
      abbr: "NW",
      parties: [
        {
          CDU: 4,
          FDP: 2,
        },
      ],
    },
    {
      name: "Rheinland-Pfalz",
      abbr: "RP",
      parties: [
        {
          SPD: 2,
          Grüne: 1,
          FDP: 1,
        },
      ],
    },
    {
      name: "Saarland",
      abbr: "SL",
      parties: [
        {
          CDU: 2,
          SPD: 1,
        },
      ],
    },
    {
      name: "Sachsen",
      abbr: "SN",
      parties: [
        {
          CDU: 2,
          SPD: 1,
          Grüne: 1,
        },
      ],
    },
    {
      name: "Sachsen-Anhalt",
      abbr: "ST",
      parties: [
        {
          CDU: 2,
          Grüne: 1,
          SPD: 1,
        },
      ],
    },
    {
      name: "Schleswig-Holstein",
      abbr: "SH",
      parties: [
        {
          CDU: 2,
          FDP: 1,
          Grüne: 1,
        },
      ],
    },
    {
      name: "Thüringen",
      abbr: "TH",
      parties: [
        {
          LINKE: 2,
          Grüne: 1,
          SPD: 1,
        },
      ],
    },
  ],
  seats: {
    Grüne: 15,
    CDU: 22,
    CSU: 4,
    FW: 2,
    SPD: 19,
    LINKE: 3,
    FDP: 4,
  },
};

const parliamentDE: MultipleChambers = {
  name: "Gesetzgebende Körperschaften",
  abbr: "Gesetzgeber",
  chambers: [
    bundestag,
    bundesrat,
  ],
};

export default parliamentDE;
