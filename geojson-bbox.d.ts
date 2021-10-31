declare module 'geojson-bbox' {
  export default function (feature: GeoJSON.Feature): [number, number, number, number];
}