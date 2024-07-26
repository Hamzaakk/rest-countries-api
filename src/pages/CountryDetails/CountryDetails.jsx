import React from 'react';
import { useNavigate } from 'react-router-dom';
import './countryDetails.css';
import { useLocation } from 'react-router-dom';

const CountryDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let country = location.state;

  if (!country) return null;

  return (
    <div className="country-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        <i className="fas fa-arrow-left"></i> Back
      </button>
      
      <div className="country-details-info">
        <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="country-details-flag" />
        
        <div className="country-details-data">
          <h2>{country.name.common}</h2>
          
          <div className="info-columns">
            <div className="left-column">
              <p><strong>Native Name:</strong> {country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub Region:</strong> {country.subregion}</p>
              <p><strong>Capital:</strong> {country.capital[0]}</p>
            </div>
            
            <div className="right-column">
              <p><strong>Top Level Domain:</strong> {country.tld[0]}</p>
              <p><strong>Currencies:</strong> {Object.values(country.currencies).map(c => c.name).join(', ')}</p>
              <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
            </div>
          </div>
          
          <div className="border-countries">
            <strong>Border Countries:</strong>
            {country.borders?.map(border => (
              <span key={border} className="border-country">{border}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;