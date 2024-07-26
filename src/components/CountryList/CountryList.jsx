import React from 'react';
import CountryCard from '../CountryCard/CountryCard'
import './countryList.css';

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.map(country => {
        if(country.name.common != 'Israel') {
          return <CountryCard key={country.cca3} country={country} />;
        }
      })}
    </div>
  );
};

export default CountryList;