import requests
import json
import os

def getURL(level: str, spatialtype: str, resolution: str, year: str, projection: str):
  return f'https://gisco-services.ec.europa.eu/distribution/v2/nuts/geojson/NUTS_{spatialtype}_{resolution}_{year}_{projection}_LEVL_{level}.geojson'


# keep this in line with map/Map.tsx constants and settings
spatialtype = "RG"
resolution = "20M"
year = "2021"
projection = "4326"
urls = [
  getURL("0", spatialtype, resolution, year, projection),
  getURL("1", spatialtype, resolution, year, projection),
  getURL("2", spatialtype, resolution, year, projection),
  getURL("3", spatialtype, resolution, year, projection),
]

total = []

for url in urls:
  response = requests.get(url)
  responseText = response.text
  responseJson = json.loads(responseText)
  total += responseJson['features']

def modifyTotal(feature: dict):
  return feature['properties']

total = list( map(modifyTotal, total) )


os.makedirs("./src/data/nuts", exist_ok=True)
with open("./src/data/nuts/all.json", "w", encoding="utf-8") as f:
  json.dump(total, f)
