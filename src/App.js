import React, { useState, useEffect } from "react";
import { intro, loading } from "./Components/Animation/Animation";
import Map from "./Components/Map/map.component";
import Search from "./Components/Search/search.component";
import DailyCases from "./Components/DailyCases/DailyCases.component";
import CountryData from "./Components/CountryData/CountryData.compoenent";
import "./App.scss";

const App = () => {
  const [selectedCountryName, setSelectedCountryName] = useState("");
  const [finalSelectedCountry, setFinalSelectedCountry] = useState("");
  const [criticalCases, setCriticalCases] = useState(0);
  const [confirmedCases, setConfirmedCases] = useState(0);
  const [recoveredCases, setRecoveredCases] = useState(0);
  const [deathCases, setDeathCases] = useState(0);
  const CountryInfo = (id) => {
    fetch(
      `https://covid-19-data.p.rapidapi.com/country/code?format=json&code=${id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key":
            "59d0b2c3c0msh86e340ae9c71bb8p13d7cbjsn0c90670232b6",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const { critical, deaths, confirmed, recovered, country } = data[0];
        setFinalSelectedCountry(country);
        setCriticalCases(critical);
        setConfirmedCases(confirmed);
        setDeathCases(deaths);
        setRecoveredCases(recovered);
        loading();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    intro(".intro", ".sanitizer");
  }, []);
  return (
    <div className="App">
      <div className="intro">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.83 237.83">
          <g id="OBJECTS">
            <path
              className="sanitizer"
              d="M346.51,265.18l-.07-6.08a17.49,17.49,0,0,0-17.66-17.3H328l-.14-13.24c3.73-1.69,6.09-4.14,6.06-6.85a5,5,0,0,0-.47-2c1.24-3.59,0-7.75-7.9-9.18-12.41-2.22-44.75,7-47.67,9.94s.07,6.49,4.18,4.68l8.56-1.37s3.58.37,8.49.8c2.2,3.71,9,6.37,17.13,6.29l.6,0,.12,11.05h-1a17.46,17.46,0,0,0-17.3,17.66l.07,6.22a39.49,39.49,0,0,0-6.31,2.07l.24-.28a41,41,0,0,0-25.77,38.52l1.35,128c.07,7.44,25.23,13.21,56.18,12.89h.4c30.95-.32,56-6.62,55.9-14.06l-1.34-128A41,41,0,0,0,346.51,265.18Z"
              transform="translate(-266.4 -209.72)"
            />
          </g>
        </svg>
      </div>
      <div className="container">
        <div className="container__sidebar">
          <Search
            setSelectedCountryName={setSelectedCountryName}
            selectedCountryName={selectedCountryName}
            CountryInfo={CountryInfo}
          />
        </div>
        <div className="container__items">
          <Map
            setSelectedCountryName={setSelectedCountryName}
            CountryInfo={CountryInfo}
          />
          <div className="container__casesInfo">
            <DailyCases />
            <CountryData
              criticalCases={criticalCases}
              recoveredCases={recoveredCases}
              deathCases={deathCases}
              confirmedCases={confirmedCases}
              finalSelectedCountry={finalSelectedCountry}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
