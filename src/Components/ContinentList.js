import PropTypes from "prop-types";
import Continent from "./Continent";

const ContinentList = ({ continents }) => (
  <ul className="continentContainer">
    {continents.map((continent) => (
      <li key={continent.continent} className={styles["continent-card"]}>
        <Continent continent={continent} />
      </li>
    ))}
  </ul>
);

ContinentList.propTypes = PropTypes.array.isRequired;

export default ContinentList;
