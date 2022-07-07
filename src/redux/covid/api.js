import axios from 'axios';

const apiContinentsURL = 'https://corona.lmao.ninja/v2/continents';
const apiCountriesURL = 'https://corona.lmao.ninja/v2/countries';

const fetchAllContinents = async () => {
  const response = await axios
    .get(apiContinentsURL)
    .then((data) => data.json());
  return response;
};

const fetchAllCountries = async () => {
  const response = await axios.get(apiCountriesURL).then((data) => data.json());
  return response;
};

export default { fetchAllCountries, fetchAllContinents };
