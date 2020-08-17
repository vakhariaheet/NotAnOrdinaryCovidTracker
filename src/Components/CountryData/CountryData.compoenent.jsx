import React from "react";
import DataShow from "../DataShow/DataShow.component";
export default function CountryData({
  criticalCases,
  recoveredCases,
  deathCases,
  confirmedCases,
  finalSelectedCountry,
}) {
  return (
    <DataShow
      criticalCases={criticalCases}
      recoveredCases={recoveredCases}
      deathCases={deathCases}
      confirmedCases={confirmedCases}
      heading={finalSelectedCountry}
      toShowSVG={true}
    />
  );
}
