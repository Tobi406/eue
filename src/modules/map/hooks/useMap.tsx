import dynamic from "next/dynamic";

const useMap = () => {
  const Map = dynamic(
    () => import('src/modules/map/Map'),
    {
      ssr: false,
      loading: () => <p>Loading Map</p>,
    },
  );
  return Map;
};

export default useMap;
