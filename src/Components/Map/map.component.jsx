import React, { useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import markerIcon from "../../assets/maps-and-flags.png";

import * as countries from "../Search/covid.json";
import "./map.styles.scss";
const Map = ({
  setSelectedCountry,
  CountryInfo,
  defaultViewport,
  setViewport,
  viewport,
}) => {
  useEffect(() => {
    if (window.width < 800) {
      defaultViewport.width = "100vw";
      setViewport(defaultViewport);
    }
  }, [defaultViewport, setViewport]);

  const shortcut = () => {
    const windowEvent = window.event;
    if (windowEvent.keyCode === 73 && windowEvent.altKey === true) {
      var search = document.querySelector("#search__input");
      search.focus();
    }
  };
  document.onkeydown = shortcut;
  const onClickHandle = (country) => {
    if (window.width < 800) {
      window.location.href = "#conuntryInfo";
    }
    setSelectedCountry(country.country);
    CountryInfo(country);
  };
  return (
    <div className="map" id="map">
      <div className="map__container" id="map__container">
        <ReactMapGL
          {...viewport}
          minZoom={1}
          attributionControl={false}
          className="mapboxComponent"
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          mapStyle="mapbox://styles/heet-vakharia/ckeuzr84tak0719oc1kgj5c3m"
          mapboxApiAccessToken="pk.eyJ1IjoiaGVldC12YWtoYXJpYSIsImEiOiJja2V1ejJzam0zenRwMnNwYzVnOHRpb3RsIn0.ucjS-K-34-JJgvlfAbHmCw"
        >
          {countries.default.map((country) => {
            if (country.code) {
              return (
                <Marker
                  key={country.code}
                  latitude={country.latitude}
                  longitude={country.longitude}
                >
                  <img
                    src={markerIcon}
                    alt=""
                    className="markerIcon"
                    onClick={() => onClickHandle(country)}
                  />
                </Marker>
              );
            } else {
              return null;
            }
          })}
        </ReactMapGL>
      </div>
    </div>
  );
};

export default Map;
