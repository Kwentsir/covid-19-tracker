import { useSelector } from 'react-redux';
import CountUp from 'react-countup';
import { FcGlobe } from 'react-icons/fc';
import Spinner from '../Components/Spinner';
import ContinentList from '../Components/ContinentList';

const Home = () => {
  const {
    continents,
    totalData: { totalCases, totalDeaths },
  } = useSelector((state) => state.covid);

  return (
    <>
      {!continents.lenght && <Spinner />}
      {continents.length > 0 && (
        <>
          <div className="globeDetails">
            <FcGlobe className="globe" />
            <div className="count">
              <CountUp
                delay={1}
                end={totalCases}
                separator=","
                prefix="Total Cases: "
                duration={3}
              />

              <CountUp
                delay={1}
                prefix="Total Deaths: "
                end={totalDeaths}
                separator=","
                duration={3}
              />
            </div>
          </div>
          <ContinentList continents={continents} />
        </>
      )}
    </>
  );
};

export default Home;
