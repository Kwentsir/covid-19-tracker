/* eslint-disable implicit-arrow-linebreak, function-paren-newline */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CountUp from 'react-countup';
import images from '../images/images';
import CountryList from './CountryList';
import Spinner from './Spinner';

const ContinentDetails = () => {
  const { continentName } = useParams();
  const continentDetails = useSelector((state) =>
    state.covid.continents.find((cont) => cont.continent === continentName),
  );
  const countries = useSelector((state) =>
    state.covid.countries.filter(
      (country) => country.continent === continentName,
    ),
  );

  return (
    <>
      {!continentDetails && <Spinner />}
      {ContinentDetails && (
        <>
          <div className="continentDetails">
            <img
              src={images[continentName]}
              alt="continent Map"
              className="continentImage"
            />
            <div className="continentCount">
              <span className="continentname">
                {continentDetails.continent}
              </span>
              <CountUp
                delay={1}
                end={continentDetails.cases}
                separator=","
                prefix="Total Cases: "
                duration={3}
              />
            </div>
          </div>
          <CountryList countries={countries} />
        </>
      )}
    </>
  );
};

export default ContinentDetails;
