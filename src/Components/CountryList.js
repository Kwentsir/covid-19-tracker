import PropTypes from 'prop-types';
import Country from './Country';
import styles from './CountryList.module.css';

const CountryList = ({ countries }) => (
  <ul className="countryContainer">
    {countries.map((country, index) => (
      <li key={country.country} className={styles['country-card']}>
        <Country country={country} index={index} />
      </li>
    ))}
  </ul>
);

CountryList.propTypes = PropTypes.array.isRequired;

export default CountryList;
