import React, { useEffect } from "react";
import * as countries from "./covid.json";

import "./search.styles.scss";

const Search = ({
  selectedCountry,
  setSelectedCountry,
  CountryInfo,
  input,
  setInput,
}) => {
  useEffect(() => {
    setInput(selectedCountry);
  }, [selectedCountry, setInput]);
  const onClickHandle = (country) => {
    if (window.width < 800) {
      window.location.href = "#countryInfo";
    }

    setSelectedCountry(country.country);
    CountryInfo(country);
    setInput(country.country);
  };

  return (
    <div className="search" id="search">
      <label htmlFor="search_input">
        <input
          type="text"
          id="search__input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="search__input"
          placeholder="Search Countries"
        />
      </label>
      <div className="result">
        {countries.default.map((country) => {
          if (
            country.country.toLowerCase().includes(input.toLowerCase()) &&
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
            return undefined;
          }
        })}
      </div>
    </div>
  );
};
export default Search;
