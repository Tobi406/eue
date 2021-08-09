import { useRouter } from "next/router";
import React from "react";
import executives from "src/data/member-states/executives";
import legislatives from "src/data/member-states/legislatives";
import { getParty } from "src/data/member-states/parties";
import { MultipleChambers, Seats } from "src/data/models/Parliament";
import ParliamentDiagram from "src/modules/parliamentDiagram";
import Semicircle from "src/modules/parliamentDiagram/semicircle";

export default function MemberState() {
  const router = useRouter();
  let { 'member-state': memberState } = router.query;
  memberState = memberState as string;

  if (memberState === undefined) return (<></>);

  const executive = executives[memberState];
  const legislative = legislatives[memberState];
  const legislativeType: "bicameral" | "unicameral" = 'chambers' in legislative ? "bicameral" : "unicameral";

  const convertSeats = (seats: Seats) => {
    return Object.entries(seats).flatMap(([key, value]) => {
      const party = getParty(key);
      return {
        id: party?.abbr ?? party?.name ?? key ?? 'Unknown',
        color: party?.color ?? '#c5c5c5',
        seats: value,
      };
    });
  }

  return (
    <>
      <p>{JSON.stringify('chambers' in legislatives[memberState])}</p>
      <h1>{executive.name}</h1>
      <ParliamentDiagram title="Not h1" seats={executive.seats} groups={[]} /> 
      <ParliamentDiagram title="H1" seats={(legislative as MultipleChambers).chambers[0].seats} groups={(legislative as MultipleChambers).chambers[0].groups} />
      {legislativeType === "unicameral"
        ? <>{/* Unicameral, oh yeah */}</>
        : <>{(legislative as MultipleChambers).chambers.map(c => <Semicircle data={convertSeats(c.seats)} />)} {/* Bicameral, oh no */}</>
      }
    </>
  );
}

// added for testing, should get a rewrite when deploying not for testing
export async function getStaticProps() {
  return {
    props: {},
  }
}

export async function getStaticPaths() {
  return {
    paths: ["/member-states/AT"],
    fallback: false,
  }
}