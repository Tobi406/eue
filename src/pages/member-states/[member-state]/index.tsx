import { useRouter } from "next/router";
import React from "react";;
import memberStates from "src/data/member-states/memberStates";
import TerritorialAuthorityDisplay from "src/modules/territorialAuthorityDisplay";

export default function MemberState() {
  const router = useRouter();
  let { 'member-state': memberState } = router.query;
  memberState = memberState as string;

  if (memberState === undefined) return (<></>);

  const ta = memberStates[memberState];
  return (
    <TerritorialAuthorityDisplay
      ta={ta}
    />
  )
}

// added for testing, should get a rewrite when deploying not for testing
export async function getStaticProps() {
  return {
    props: {},
  }
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(memberStates).map(ms => `/member-states/${ms}`),
    fallback: false,
  }
}
