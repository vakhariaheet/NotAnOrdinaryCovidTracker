import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
const GlobalChart = ({ countries }) => {
  const [names, setNames] = useState([]);
  const [choice, setChoice] = useState("active");
  const [activeCases, setActiveCases] = useState([]);
  const [recoveredCases, setRecoveredCases] = useState([]);
  const [deathCases, setDeathCases] = useState([]);
  const [confirmedCases, setConfirmedCases] = useState([]);
  const [criticalCases, setCriticalCases] = useState([]);
  const [currentSelect, setCurrentSelect] = useState(activeCases);
  useEffect(() => {
    topTenCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);
  const topTenCountries = (choice = "active") => {
    const countriesArr = countries;
    const topTen = countriesArr
      .sort((a, b) => b[choice] - a[choice])
      .filter((val, i) => i < 10);
    const activeArr = topTen.map((country) => country.active);
    const recoveredArr = topTen.map((country) => country.recovered);
    const confirmedArr = topTen.map((country) => country.cases);
    const criticalArr = topTen.map((country) => country.critical);
    const deathsArr = topTen.map((country) => country.deaths);
    const nameArr = topTen.map(({ country }) => country);
    console.log(topTen, choice);
    setActiveCases(activeArr);
    setConfirmedCases(confirmedArr);
    setCriticalCases(criticalArr);
    setDeathCases(deathsArr);
    setRecoveredCases(recoveredArr);
    setNames(nameArr);
  };
  const onClickHandle = (choice) => {
    switch (choice) {
      case "active":
        setCurrentSelect(activeCases);
        setChoice("active");
        topTenCountries("active");
        break;
      case "confirmed":
        setCurrentSelect(confirmedCases);
        setChoice("confirmed");
        topTenCountries("confirmed");
        break;
      case "recovered":
        setCurrentSelect(recoveredCases);
        setChoice("recovered");
        topTenCountries("recovered");
        break;
      case "critical":
        setCurrentSelect(criticalCases);
        setChoice("critical");
        topTenCountries("critical");
        break;
      case "deaths":
        setCurrentSelect(deathCases);
        setChoice("deaths");
        topTenCountries("deaths");
        break;
      default:
        break;
    }
  };
  const data = {
    labels: names,

    datasets: [
      {
        label: choice,
        backgroundColor: [
          "#D00000",
          "#FFBA08",
          "#3F88C5",
          "#032B43",
          "#136F63",
        ],
        borderColor: ["#D00000", "#FFBA08", "#3F88C5", "#032B43", "#136F63"],
        borderWidth: 1,
        hoverBorderColor: "black",
        // eslint-disable-next-line no-eval
        data: currentSelect,
      },
    ],
  };
  return (
    <div className="globalChart">
      <Bar
        data={data}
        options={{
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "#ecebe4",
                },
                gridLines: {
                  display: false,
                  drawTicks: true,
                },
              },
            ],
          },
          legend: {
            fullWidth: true,
            labels: {
              fontColor: "#ecebe4",
            },
          },
          animation: {
            duration: 500,
            easing: "easeInBounce",
            animateRotate: false,
            animateScale: false,
          },

          responsive: true,
        }}
      />
      <button
        disabled={currentSelect === activeCases ? true : false}
        onClick={() => onClickHandle("active")}
      >
        Active
      </button>
      <button
        disabled={currentSelect === confirmedCases ? true : false}
        onClick={() => onClickHandle("confirmed")}
      >
        Confirmed
      </button>
      <button
        disabled={currentSelect === recoveredCases ? true : false}
        onClick={() => onClickHandle("recovered")}
      >
        Recovered
      </button>
      <button
        disabled={currentSelect === criticalCases ? true : false}
        onClick={() => onClickHandle("critical")}
      >
        Critical
      </button>
      <button
        disabled={currentSelect === deathCases ? true : false}
        onClick={() => onClickHandle("deaths")}
      >
        Deaths
      </button>
    </div>
  );
};

export default GlobalChart;
