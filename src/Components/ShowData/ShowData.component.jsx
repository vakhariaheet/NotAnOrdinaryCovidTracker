import { easeBounce } from "d3-ease";
import React from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";
import "./ShowData.styles.scss";
const DataShow = ({
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
          "#032B43",
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
    <div className="datashow" id={id}>
      <HorizontalBar
        key="1"
        data={data}
        options={{
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
          animation: {
            duration: 500,
            easing: "easeInBounce",
            animateRotate: false,
            animateScale: false,
          },
          aspectRatio: false,
          responsive: true,
        }}
      />
    </div>
  );
};
export default DataShow;
