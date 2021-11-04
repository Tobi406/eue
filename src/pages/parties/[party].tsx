import Text from "src/common/Text";
import { allParties, getParty, getPartyLink } from "src/data/member-states/parties";
import Party from "src/data/models/Party";
import optStr from "src/modules/util/optStr";
import useMap from "src/modules/map/hooks/useMap";
import { GetStaticProps } from "next";

const Page = ({
  party,
}: {
  party: Party,
}) => {
  const Map = useMap();

  return (
    <>
      <Text
        type="h2"
      >
        {`${party.name} ${optStr(party.abbr, abbr => `(${abbr}${party.idNecessary ? party.id : ''})`)}`}
      </Text>
      <Map nutsCode={party.state!} />
    </>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (context) => {
  const { party } = context.params!;

  const partyFound = getParty(party as string);

  return {
    props: {
      party: partyFound,
    },
  };
}

const getPaths = () => {
  const paths: string[] = [];
  allParties
    .filter(party => party.state !== "ALL")
    .forEach(party =>
      paths.push(`/parties/${encodeURIComponent(getPartyLink(party))}`)
    );
  return paths;
}

export async function getStaticPaths() {
  return {
    paths: getPaths(),
    fallback: false,
  }
}
