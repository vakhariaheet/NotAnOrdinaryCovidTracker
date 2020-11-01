import React, { useState, useEffect } from "react";
import ShowData from "../ShowData/ShowData.component";

const DailyCases = () => {
  const [criticalCases, setCriticalCases] = useState(0);
  const [confirmedCases, setConfirmedCases] = useState(0);
  const [recoveredCases, setRecoveredCases] = useState(0);
  const [deathCases, setDeathCases] = useState(0);
  useEffect((criticalCases, deathCases, recoveredCases, confirmedCases) => {
    fetch("https://corona.lmao.ninja/v2/all", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "59d0b2c3c0msh86e340ae9c71bb8p13d7cbjsn0c90670232b6",
      },
    })
      .then((response) => response.json())
      .then((stats) => {
        const { critical, cases, deaths, recovered } = stats;
        setCriticalCases(critical);
        setConfirmedCases(cases);
        setRecoveredCases(recovered);
        setDeathCases(deaths);
      })
      .catch((err) => {
        console.log(err);
      });
    return undefined;
  }, []);
  return (
    <ShowData
      criticalCases={criticalCases}
      recoveredCases={recoveredCases}
      deathCases={deathCases}
      confirmedCases={confirmedCases}
      selectedCountry={"Global"}
      toShowSVG={false}
    />
  );
};
export default DailyCases;
