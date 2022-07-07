/* eslint-disable implicit-arrow-linebreak, function-paren-newline */
import PropTypes from 'prop-types';

const Country = ({
  country: {
    country,
    cases,
    countryInfo: { flag },
  },
  index,
}) => {
  const bgColor = (fade = 'ff') =>
    `#${
      (index + 1) % 4 === 2 || (index + 1) % 4 === 3 ? 'D04278' : 'DD4681'
    }${fade}`;
  return (
    <div
      data-testid="countryItem"
      className="countryDetails"
      style={{
        backgroundImage: `linear-gradient(to right, #ffffff00, ${bgColor(
          'aa',
        )} 40%, ${bgColor('cc')} 65%, ${bgColor()} 80%), url(${flag})`,
        backgroundSize: '50% 100%',
      }}
    >
      <div className="countryCount">
        <h4 className="countryHeader">
          <span className="countryTitle">{country}</span>
        </h4>
        <span className="countryFigures">{cases.toLocaleString()}</span>
      </div>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    country: PropTypes.string.isRequired,
    cases: PropTypes.number.isRequired,
    countryInfo: PropTypes.shape({
      flag: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Country;
