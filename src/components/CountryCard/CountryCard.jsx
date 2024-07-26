import React from 'react';
import { useNavigate } from 'react-router-dom';
import './countryCard.css';

const CountryCard = ({ country }) => {

  const navigate = useNavigate();

  return (
    <div className="country-card" onClick={() => navigate("/country", { state: country })}>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="country-flag" />
      <div className="country-info">
        <h2 className="country-name">{country.name.common}</h2>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
      </div>
    </div>
  );
};

export default CountryCard;