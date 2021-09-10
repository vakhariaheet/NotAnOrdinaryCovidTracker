import React, { useEffect } from "react";

import "./search.styles.scss";

const Search = ({
  countries,
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
        {countries.map((country) => {
          return (
            <button
              id={country.countryInfo.iso2}
              className="country"
              key={country.code}
              onClick={() => onClickHandle(country)}
              href="#countryInfo"
              name={country.code}
            >
              {country.country}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Search;
