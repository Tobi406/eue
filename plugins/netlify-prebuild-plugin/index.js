const fs = require('fs/promises');
const { constants } = require('fs');
const axios = require('axios').default;

const getURL = (level) => {
  // keep this in line with map/Map.tsx constants and settings
  const spatialtype = "RG";
  const resolution = "20M";
  const year = "2021";
  const projection = "4326";
  return `https://gisco-services.ec.europa.eu/distribution/v2/nuts/geojson/NUTS_${spatialtype}_${resolution}_${year}_${projection}_LEVL_${level}.geojson`
}

module.exports = {
  onPreBuild: async () => {
    console.log('Download NUTS data:');
    const urls = [
      getURL("0"),
      getURL("1"),
      getURL("2"),
      getURL("3"),
    ];
    const results = [];
    for (url of urls) {
      const result = (await axios.get(url)).data;
      results.push(result.features);
    }
    const content = results
      .reduce((a, b) => ([
        ...a,
        ...b,
      ]))
      .map(result => result.properties);
    await fs.mkdir('src/data/nuts', { recursive: true });
    await fs.writeFile('src/data/nuts/all.json', JSON.stringify(content));
    console.log('Done');
  },
};
