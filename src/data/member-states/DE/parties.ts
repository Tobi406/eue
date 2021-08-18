import Party from "src/data/models/Party";

let partiesDE: Party[] = [
  {
    name: "Die Linke",
    abbr: "LINKE",
    color: "#BE3075",
    europeanParty: "PEL",
    europeanGroup: "GUE/NGL",
  },
  {
    name: "Die PARTEI",
    abbr: "PARTEI",
    color: "#b5152b",
  },
  {
    name: "Sozialdemokratische Partei Deutschlands",
    abbr: "SPD",
    color: "#E3000F",
    europeanParty: "PES",
    europeanGroup: "S&D",
  },
  {
    name: "Bündnis 90/Die Grünen",
    abbr: "Grüne",
    color: "#46962b",
    europeanParty: "EGP",
    europeanGroup: "G/EFA",
  },
  {
    name: "Piratenpartei Deutschland",
    abbr: "Piraten",
    color: "#ff820a",
    europeanGroup: "G/EFA",
  },
  {
    name: "Volt Deutschland",
    abbr: "Volt DE",
    color: "#562883",
    europeanGroup: "G/EFA",
  },
  {
    name: "Ökologisch-Demokratische Partei",
    abbr: "ÖDP",
    color: "#ff6400",
    europeanGroup: "G/EFA",
  },
  {
    name: "Freie Demokratische Partei",
    abbr: "FDP",
    color: "#ffff00",
    europeanParty: "ALDE",
    europeanGroup: "RE",
  },
  {
    name: "Freie Wähler",
    abbr: "FW",
    color: "#FF8000",
    europeanParty: "EDP",
    europeanGroup: "RE",
  },
  {
    name: "Christlich-Demokratische Union Deutschlands",
    abbr: "CDU",
    color: "#000000",
    europeanParty: "EPP",
    europeanGroup: "EPP",
  },
  {
    name: "Chirstlich-Soziale Union in Bayern e.V.",
    abbr: "CSU",
    color: "#0088ce",
    europeanParty: "EPP",
    europeanGroup: "EPP",
  },
  {
    name: "Brandenburger Vereinigte Bürgerbewegungen/Freie Wähler",
    abbr: "BVB/FW",
    color: "#043390",
  },
  {
    name: "Familien-Partei Deutschlands",
    abbr: "Familie",
    color: "#ff6600",
    europeanParty: "ECPM",
    europeanGroup: "EPP",
  },
  {
    name: "Liberal-Konservative Reformer",
    abbr: "LKR",
    color: "#f39200",
    europeanParty: "ECR",
    europeanGroup: "ECR",
  },
  {
    name: "Alternative für Deutschland",
    abbr: "AfD",
    color: "#009ee0",
    europeanGroup: "ID",
  },
  {
    name: "Bürger in Wut",
    abbr: "BIW",
    color: "#005ab0",
  },
  {
    name: "Nationaldemokratische Partei Deutschlands",
    abbr: "NPD",
    color: "#8b4726",
  },
];

partiesDE = partiesDE.map(party => ({...party, state: "DE"}));

export default partiesDE;
