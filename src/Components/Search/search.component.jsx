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
        {countries
          .filter((value, index) => index < 5)
          .map((country) => (
            <button
              id={country.countryInfo.iso2}
              className="country"
              key={country.countryInfo.iso2}
              onClick={() => onClickHandle(country)}
              href="#countryInfo"
              name={country.countryInfo.iso2}
            >
              {country.country}
            </button>
          ))}
      </div>
    </div>
  );
};
export default Search;
