import { useRouter } from "next/router";
import React from "react";
import Text from "src/common/Text";
import memberStates from "src/data/member-states/territorialAuthorities";
import  { MultipleChambers, ParliamentChamber } from "src/data/models/Parliament";
import ParliamentDiagram from "src/modules/parliamentDiagram";

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
  let { 'member-state': memberState } = router.query;
  memberState = memberState as string;

  if (memberState === undefined) return (<></>);

  const ta = memberStates[memberState];
  const executive = ta.executive;
  const legislative = ta.legislatives;
  const legislativeType: "bicameral" | "unicameral" = 'chambers' in legislative ? "bicameral" : "unicameral";

  return (
    <>
      <Text
        type="h2"
      >
        {`${ta.name} (${ta.officialName}${typeof ta?.abbr !== undefined ? `, ${ta.abbr}` : ''})`}
      </Text>
      <ParliamentDiagram title="Executive" seats={executive.seats} /> 
      {legislativeType === "unicameral"
        ? renderChamber(legislative as ParliamentChamber)
        : (legislative as MultipleChambers).chambers.map(renderChamber)
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