import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import fetchAllCountries from '../redux/covid/api';
import { fetchStats } from '../redux/covid/covidSlice';

const DetailPage = () => {
  const countryStore = useSelector((store) => store.details);
  const dispatch = useDispatch();
  const { name } = useParams();
  const findCountry = countryStore.find((country) => country.country === name);

  useEffect(() => {
    if (countryStore.length === 0) {
      fetchAllCountries().then((response) => dispatch(fetchStats(response)));
    }
  });

  return (
    <div className="container-fluid states-container">
      <div className="continent">
        <h1>{name}</h1>
        <img
          src={findCountry.country_flag}
          alt="national-flag"
          className="national-flag1"
        />
      </div>
      <div>
        <h3> Today&apos;s update</h3>
        <ul className="today">
          <li className="stats-list">
            <p>New cases:</p>
            {' '}
            {findCountry.todays_cases.toLocaleString()}
          </li>
          <li className="stats-list">
            <p>Confirmed deaths:</p>
            {' '}
            {findCountry.todays_deaths.toLocaleString()}
          </li>
          <li className="stats-list">
            <p>New Recoveries:</p>
            {' '}
            {findCountry.todays_recovered.toLocaleString()}
          </li>
        </ul>
        <ul className="total">
          <h3>Total</h3>
          <li className="stats-list">
            <p>Confirmed cases:</p>
            {' '}
            {findCountry.total_cases.toLocaleString()}
          </li>
          <li className="stats-list">
            <p>Recovered:</p>
            {' '}
            {findCountry.total_recovered.toLocaleString()}
          </li>
          <li className="stats-list">
            <p>Active Cases:</p>
            {' '}
            {findCountry.total_active.toLocaleString()}
          </li>
          <li className="stats-list">
            <p>Total Tests:</p>
            {' '}
            {findCountry.total_tests.toLocaleString()}
          </li>
          <li className="stats-list">
            <p>Deaths:</p>
            {' '}
            {findCountry.total_deaths.toLocaleString()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailPage;
