import { useRouter } from "next/router";
import React from "react";
import Text from "src/common/Text";
import executives from "src/data/member-states/executives";
import legislatives from "src/data/member-states/legislatives";
import memberStates from "src/data/member-states/memberStates";
import  { MultipleChambers, ParliamentChamber, Seats } from "src/data/models/Parliament";
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

  const msInfo = memberStates[memberState];
  const executive = executives[memberState];
  const legislative = legislatives[memberState];
  const legislativeType: "bicameral" | "unicameral" = 'chambers' in legislative ? "bicameral" : "unicameral";

  return (
    <>
      <p>{JSON.stringify('chambers' in legislatives[memberState])}</p>
      <Text
        type="h2"
      >
        {`${msInfo.name} (${msInfo.officialName}${typeof msInfo?.abbr !== undefined ? `, ${msInfo.abbr}` : ''})`}
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