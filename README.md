# APIs Used

- GeoDB https://rapidapi.com/wirefreethought/api/geodb-cities/
- OpenWeather https://openweathermap.org/

### Create an src/api.js file that will store the API information

```
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "64cadd98e2msh4dbf562a4bbc531p1443ffjsne0932b548394",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
}

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"

export const WEATHER_API_KEY = "[api key here]"
```

# Installations

- npm i react-accessible-accordion
- npm i react-select-async-paginate
