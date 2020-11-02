import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./CountryChart.styles.scss";
const CountryChart = ({
  criticalCases,
  recoveredCases,
  confirmedCases,
  deathCases,
  selectedCountry,
  activeCases,
  id,
}) => {
  const data = {
    labels: ["Confirmed", "Recovered", "Active", "Deaths", "Critical"],

    datasets: [
      {
        label: selectedCountry,
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
        data: [
          confirmedCases,
          recoveredCases,
          activeCases,
          deathCases,
          criticalCases,
        ],
      },
    ],
  };
  return (
    <div className="countryChart" id={id}>
      <Doughnut
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
    </div>
  );
};
export default CountryChart;
