import Party from "src/data/models/Party";

let partiesAT: Party[] = [
  {
    name: "Sozialdemokratische Partei Österreichs",
    abbr: "SPÖ",
    color: "#FF0000",
    europeanParty: "PES",
    europeanGroup: "S&D",
  },
  {
    name: "Die Grünen - Die Grüne Alternative",
    abbr: "GRÜNE",
    color: "#69B12E",
    europeanParty: "EGP",
    europeanGroup: "G/EFA",
  },
  {
    name: "NEOS - Das Neue Österreich und Liberales Forum",
    abbr: "NEOS",
    color: "#E3257B",
    europeanParty: "ALDE",
    europeanGroup: "RE",
  },
  {
    name: "Freiheitliche Partei Österreichs",
    abbr: "FPÖ",
    color: "#0052FB",
    europeanParty: "ID",
    europeanGroup: "ID",
  },
  {
    name: "Österreichische Volkspartei",
    abbr: "ÖVP",
    color: "#62C3D0",
    europeanParty: "ID",
    europeanGroup: "ID",
  },
];

partiesAT = partiesAT.map(party => ({...party, state: "AT"}));

export default partiesAT;
