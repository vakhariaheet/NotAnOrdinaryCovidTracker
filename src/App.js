import React, { useState } from "react";

import Map from "./Components/Map/map.component";
import Search from "./Components/Search/search.component";
import DailyCases from "./Components/DailyCases/DailyCases.component";
import "./App.scss";

const App = () => {
  const [selectedCountryName, setSelectedCountryName] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  return (
    <div className="App">
      <div className="container">
        <div className="container__sidebar">
          <Search
            setSelectedCountryName={setSelectedCountryName}
            selectedCountryName={selectedCountryName}
            setSelectedCountryCode={setSelectedCountryCode}
          />
        </div>
        <div className="container__items">
          <Map
            setSelectedCountryName={setSelectedCountryName}
            setSelectedCountryCode={setSelectedCountryCode}
          />
          <div className="container__casesInfo">
            <DailyCases />
            <DailyCases />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
