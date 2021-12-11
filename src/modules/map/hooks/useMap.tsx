import dynamic from "next/dynamic";
import { Dispatch, useState } from "react";
import Button from "src/common/Button";
import Text from "src/common/Text";
import styled from "styled-components";

const MapContainer = styled.div`
  max-height: 500px;
  aspect-ratio: 2 / 1;

  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: lightgray;
`;

const Placeholder = ({
  setActivated,
}: {
  setActivated: Dispatch<boolean>,
}) => {
  return (
    <MapContainer>
      <Button onClick={() => setActivated(true)}>
        Activate map
      </Button>
    </MapContainer>
  );
};

const useMap = () => {
  const [activated, setActivated] = useState(false);

  if (!activated) {
    return () => {
      return <Placeholder setActivated={setActivated} />;
    }
  }
  
  const Map = dynamic(
    () => import('src/modules/map/Map'),
    {
      ssr: false,
      loading: () => <MapContainer>
        <Text
          fontSize="18px"
        >
          Loading Map... {/* Add a spinner here? */}
        </Text>
      </MapContainer>,
    },
  );
  return Map;
};

export default useMap;
