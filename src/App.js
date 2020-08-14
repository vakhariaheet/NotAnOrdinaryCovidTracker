import React, { useState } from "react";

import Map from "./Components/Map/map.component";
import "./App.css";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  setInterval(function () {
    // Set interval for checking
    var date = new Date(); // Create a Date object to find out what time it is
    if (date.getHours() === 0 && date.getMinutes() === 0) {
      // Check the time
      // Do stuff
    }
  }, 60000); // Repeat every 60000 milliseconds (1 minute)
  return (
    <div className="App">
      <Map setSelectedCountry={setSelectedCountry} />
      <h1>{selectedCountry} </h1>
    </div>
  );
};

export default App;
