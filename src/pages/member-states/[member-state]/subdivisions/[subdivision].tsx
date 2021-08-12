import { useRouter } from "next/router";
import React from "react";
import memberStates from "src/data/member-states/memberStates";
import  { ParliamentChamber } from "src/data/models/Parliament";
import ParliamentDiagram from "src/modules/parliamentDiagram";
import TerritorialAuthorityDisplay from "src/modules/territorialAuthorityDisplay";

const renderChamber = (chamber: ParliamentChamber) => {
  return (
    <ParliamentDiagram
      title={`${chamber.name} ${typeof chamber?.abbr !== undefined ? `(${chamber.abbr})` : ''}`}
      seats={chamber.seats}
      groups={chamber.groups}
    />
  )
}

export default function MemberState() {
  const router = useRouter();
  let { 'member-state': memberState, subdivision } = router.query;
  memberState = memberState as string;
  subdivision = subdivision as string;

  if (memberState === undefined || subdivision === undefined) return (<></>);

  const taMemberState = memberStates[memberState];
  if (taMemberState.subdivisions === undefined) return (<></>);
  const ta = taMemberState.subdivisions[subdivision];

  return (
    <TerritorialAuthorityDisplay
      ta={ta}
    /> 
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
    paths: ["/member-states/AT/subdivisions/W"],
    fallback: false,
  }
}