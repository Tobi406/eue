import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FC, ReactElement } from "react";
import Icon from "src/common/Icon";
import Text from "src/common/Text";
import Party from "src/data/models/Party";

const PartyDisplay: FC<{
  party: Party,
}> = ({ party }): ReactElement => {
  return (
    <>
      <Icon
        icon={faCircle}
        color={party?.color ?? '#c5c5c5'}
        margin="0 1px 0 0"
      />
      <Text>
        {party?.abbr ?? party.name}
      </Text>
    </>
  );
}

export default PartyDisplay;
