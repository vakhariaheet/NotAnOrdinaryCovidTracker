import React, { useState } from "react";

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
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
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
