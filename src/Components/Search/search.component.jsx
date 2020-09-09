import React from "react";
import * as countries from "./covid.json";

import "./search.styles.scss";

const Search = ({
  selectedCountryName,
  setSelectedCountryName,
  CountryInfo,
}) => {
  const onClickHandle = (country) => {
    window.location.href = "#countryInfo";
    setSelectedCountryName(country.country);
    CountryInfo(country);
  };

  return (
    <div className="search" id="search">
      <label htmlFor="search_input">
        <input
          type="text"
          id="search__input"
          value={selectedCountryName}
          onChange={(event) => setSelectedCountryName(event.target.value)}
          className="search__input"
          placeholder="Search Countries"
        />
      </label>
      <div className="result">
        {countries.default.map((country) => {
          if (
            country.country
              .toLowerCase()
              .includes(selectedCountryName.toLowerCase()) &&
            country.code
          ) {
            return (
              <button
                id={country.code}
                className="country"
                key={country.code}
                onClick={() => onClickHandle(country)}
                href="#countryInfo"
                name={country.code}
              >
                {country.country}
              </button>
            );
          } else {
            console.log(country.code);
            return undefined;
          }
        })}
      </div>
    </div>
  );
};
export default Search;
