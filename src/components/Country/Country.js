import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, population, flags, region, capital } = props.country;
  // console.log(props);
  return (
    <div className="country-div bg-warning">
      <h2>Name: {name.common}</h2>
      <h2>Population: {population}</h2>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
