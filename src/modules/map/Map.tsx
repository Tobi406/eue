import { GeoJSON as GeoJSONType } from "geojson";
import 'leaflet/dist/leaflet.css';
import { ComponentProps } from "react";
import { GeoJSON, MapContainer, useMap } from "react-leaflet";
import styled from "styled-components";
import useSWR from "swr";
import bbox from 'geojson-bbox';

interface NutsProperties {
  CNTR_CODE: string,
  COAST_TYPE: number,
  FID: string,
  LEVL_CODE: number,
  MOUNT_TYPE: number,
  NAME_LATN: string,
  NUTS_ID: string,
  NUTS_NAME: string,
  URBN_TYPE: number,
}

// maybe this function can use some cookies or something to determine settings
const fetchNuts = (level: string) => {
  const fetcher = (input: RequestInfo, init: RequestInit, ...args: any[]) => fetch(input, init).then(res => res.json());
  

  // Taken from: https://gisco-services.ec.europa.eu/distribution/v2/nuts/nuts-2021-files.html
  // keep these settings in line with scripts/downloadNuts.py
  const spatialtype = "RG"; // Don't change this
  const resolution = "20M"; // possible values: 60M, 20M, 10M, 03M, 01M 
  const year = "2021";
  const projection = "4326"; // Be careful with this aswell

  return useSWR<GeoJSONType>(
    `https://gisco-services.ec.europa.eu/distribution/v2/nuts/geojson/NUTS_${spatialtype}_${resolution}_${year}_${projection}_LEVL_${level}.geojson`,
    fetcher
  );
}

const Legend = styled.div`
  background-color: white;
  padding: 3px;
`;
const LegendColor = styled.i`
  width: 12px;
  height: 12px;
  opacity: 1;
  margin-right: 3px;
  float: left;
  background: ${props => props.color};
`;

const Map = ({
  nutsCode,
}: {
  nutsCode: string,
}) => {
  if (nutsCode === undefined) return (<></>);
  const nutsLevel = nutsCode.length - 2;

  const nuts0Response = fetchNuts('0');
  const nuts1Response = fetchNuts('1');
  const nuts2Response = fetchNuts('2');
  const nuts3Response = fetchNuts('3');
  
  if (
    nuts0Response.isValidating
    || nuts1Response.isValidating
    || nuts2Response.isValidating
    || nuts3Response.isValidating
  ) {
    return (<p>Loading data...</p>)
  }

  const nuts0 = nuts0Response.data!;
  const nuts1 = nuts1Response.data!;
  const nuts2 = nuts2Response.data!;
  const nuts3 = nuts3Response.data!;

  const onEachFeature: ComponentProps<typeof GeoJSON>['onEachFeature'] = (feature, layer) => {
    const properties = feature.properties as NutsProperties;
    layer.bindPopup(properties.NAME_LATN)
  };

  const CustomGeoJSON = (props: ComponentProps<typeof GeoJSON>) => {
    return <GeoJSON
      {...props}
      attribution="Source: Eurostat | &copy; EuroGeographics for the administrative boundaries"
      onEachFeature={onEachFeature}
    />
  }

  const isInMS = (nutsId: string) => {
    return nutsId.substring(0, 2) === nutsCode.substring(0,2);
  };

  const Nuts0Outline = () => <CustomGeoJSON
    key={5}
    data={nuts0}
    style={(f) => ({
      stroke: true,
      fill: false,
      color: 'gray',
      weight: 4,
    })}
  />;
  const Nuts1Outline = () => <CustomGeoJSON
    key={6}
    data={nuts1}
    style={(f) => ({
      stroke: true,
      fill: false,
      color: 'gray',
      weight: 3,
    })}
  />;

  const colors = {
    first: '#2c7fb8',
    second: '#7fcdbb',
    third: '#edf8b1',
  };

  const colorDescriptions = {
    first: 'Other',
    second: 'Same level',
    third: 'Current object',
  };

  const setCenterFeature = <T, >(feature: GeoJSON.Feature, toReturn: T): T => {
    const result = bbox(feature);
    const [lng1, lat1, lng2, lat2] = result;

    const map = useMap();

    map.fitBounds([[lat1, lng1], [lat2, lng2]]);
    // or calculate center:
    //const lng = (lng1+lng2)/2;
    //const lat = (lat1+lat2)/2;
    //map.setView([lat, lng], 5);
    //console.log('Set map to ' + [lat, lng])
    return toReturn;
  }

  return (
    <>
      <p>Current NUTS level: {nutsLevel}</p>
      <MapContainer
        style={{
          height: '500px',
          width:'90%',
        }}
        zoom={4}
        center={[50, 25]}
      >
        {nutsLevel === 0 && <>
          <CustomGeoJSON
            key={0}
            data={nuts0}
            style={(f) => ({
              color: colors.first,
              weight: 1,
            })}
            filter={(f) => {
              return (f.properties as NutsProperties).CNTR_CODE === nutsCode
                ? setCenterFeature(f, false)
                : true;
            }}
          />
          <CustomGeoJSON
            key={1}
            data={nuts1}
            style={(f) => ({
              color: colors.second,
              weight: 1,
            })}
            filter={(f) => {
              return (f.properties as NutsProperties).CNTR_CODE !== nutsCode
                ? false
                : true;
            }}
          />
        </>}
        {nutsLevel === 1 && <>
          <Nuts0Outline />

          <CustomGeoJSON
            key={0}
            data={nuts1}
            style={(f) => isInMS(f!.properties.NUTS_ID!) ? ({
              color: colors.second,
              weight: 1,
            }) : ({
              color: colors.first,
              weight: 1,
            })}
            filter={(f) => {
              return !isInMS(f.properties.NUTS_ID!) || f.properties.NUTS_ID!.substring(0, 3) !== nutsCode.substring(0, 3) ? true : setCenterFeature(f, false);
            }}
          />
          <CustomGeoJSON
            key={1}
            data={nuts2}
            style={(f) => ({
              color: colors.third,
              weight: 1,
            })}
            filter={(f) => {
              return isInMS(f.properties.NUTS_ID!) && f.properties.NUTS_ID!.substring(0, 3) === nutsCode.substring(0, 3);
            }}
          />
        </>}
        {nutsLevel === 2 && <>
          <Nuts0Outline />
          <Nuts1Outline />


          <CustomGeoJSON
            key={0}
            data={nuts2}
            style={(f) => isInMS(f!.properties.NUTS_ID!) ? ({
              color: colors.second,
              weight: 1,
            }) : ({
              color: colors.first,
              weight: 1,
            })}
            filter={(f) => {
              return !isInMS(f.properties.NUTS_ID!) || f.properties.NUTS_ID!.substring(0, 4) !== nutsCode.substring(0, 4) ? true : setCenterFeature(f, false);
            }}
          />
          <CustomGeoJSON
            key={1}
            data={nuts3}
            style={(f) => ({
              color: colors.third,
              weight: 1,
            })}
            filter={(f) => {
              return isInMS(f.properties.NUTS_ID!) && f.properties.NUTS_ID!.substring(0, 4) === nutsCode.substring(0, 4);
            }}
          />
        </>}
        <div className="leaflet-bottom leaflet-right">
          <div className="leaflet-control leaflet-bar">
            <Legend>
              {/* taken with inspiration from https://codesandbox.io/s/how-to-add-a-legend-to-the-map-using-react-leaflet-6yqs5?file=/src/Legend.js:575-582 */}
              {Object.entries(colors).map(([key, value]) => <>
                <LegendColor color={value} /> {colorDescriptions[key as keyof typeof colors]} <br />
              </>)}
            </Legend>
          </div>
        </div>
      </MapContainer>
    </>
  );
};

export default Map;
