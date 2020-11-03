import React, { useEffect, useState } from "react";
import "./GlobalChart.styles.scss";
import { Bar } from "react-chartjs-2";
const GlobalChart = ({ countries }) => {
  const [names, setNames] = useState([]);
  const [choice, setChoice] = useState("active");
  const [topTen, setTopTen] = useState([]);

  useEffect(() => {
    topTenCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);
  const topTenCountries = (choice = "active") => {
    const countriesArr = countries;
    const topTen = countriesArr
      .sort((a, b) => b[choice] - a[choice])
      .filter((val, i) => i < 10);
    const nameArr = topTen.map(({ country }) => country);

    setNames(nameArr);
    setTopTen(topTen);
  };
  const onClickHandle = (choice) => {
    switch (choice) {
      case "active":
        setChoice("active");
        topTenCountries("active");

        break;
      case "cases":
        setChoice("cases");
        topTenCountries("cases");

        break;
      case "recovered":
        setChoice("recovered");
        topTenCountries("recovered");

        break;
      case "critical":
        setChoice("critical");
        topTenCountries("critical");

        break;
      case "deaths":
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
        label: choice === "cases" ? "Confirmed" : choice,
        backgroundColor: [
          "#D00000",
          "#FFBA08",
          "#3F88C5",
          "#032B43",
          "#136F63",
          "#48ACF0",
          "#594236",
          "#93A3BC",
          "#CCDDE2",
          "#6F584B",
        ],
        borderColor: [
          "#D00000",
          "#FFBA08",
          "#3F88C5",
          "#032B43",
          "#136F63",
          "#48ACF0",
          "#594236",
          "#93A3BC",
          "#CCDDE2",
          "#6F584B",
        ],
        borderWidth: 1,
        hoverBorderColor: "black",
        // eslint-disable-next-line no-eval
        data: topTen.map((country) => country[choice]),
      },
    ],
  };
  return (
    <div className="globalChart">
      <Bar
        data={data}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: "#ecebe4",
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: "#ecebe4",
                  fontFamily: "Della Respira",
                  fontSize: 15,
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
              fontFamily: "Exo",
              padding: 50,
              fontSize: 20,
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
      <div className="btns">
        <button
          disabled={choice === "active" ? true : false}
          onClick={() => onClickHandle("active")}
          className="global--btn"
        >
          Active
        </button>
        <button
          disabled={choice === "cases" ? true : false}
          onClick={() => onClickHandle("cases")}
          className="global--btn"
        >
          Confirmed
        </button>
        <button
          disabled={choice === "recovered" ? true : false}
          onClick={() => onClickHandle("recovered")}
          className="global--btn"
        >
          Recovered
        </button>
        <button
          disabled={choice === "critical" ? true : false}
          onClick={() => onClickHandle("critical")}
          className="global--btn"
        >
          Critical
        </button>
        <button
          disabled={choice === "deaths" ? true : false}
          onClick={() => onClickHandle("deaths")}
          className="global--btn"
        >
          Deaths
        </button>
      </div>
    </div>
  );
};

export default GlobalChart;
