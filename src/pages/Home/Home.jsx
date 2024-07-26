import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchFilter from '../../components/SearchFilter/SearchFilter';
import CountryList from '../../components/CountryList/CountryList'
import './home.css';

function Home() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      const result = await axios('https://restcountries.com/v3.1/all');
      setCountries(result.data);
      setFilteredCountries(result.data);
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const results = countries.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (region === '' || country.region === region)
    );
    setFilteredCountries(results);
  }, [searchTerm, region, countries]);

  return (
    <div >
        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          region={region}
          setRegion={setRegion}
        />
        <CountryList countries={filteredCountries} />
    </div>
  );
}

export default Home;