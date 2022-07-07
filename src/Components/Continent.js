import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {BsFillArrowUpRightCircleFill} from "react-icons/bs";
import images from "../images/images";

const Continent = ({Continent: {continent, cases}}) => (
    <Link  
    to={`/${continent}`}
    data-testid= 'contentItem'
    className='continentElement'
    >
        <BsFillArrowUpRightCircleFill 
        className='arrowButton' />
        <img 
        src={images[continent]}
        alt='Continent map'
        className='continentImage'
        />
        <div className='continentText'>
            <h4 className='self-center md:self-end'>
                <span className='text-2xl'>{`${continent}`}</span>
            </h4>
            <span className='text-xl'>{cases.toLocaleString()}</span>
        </div>
    </Link>
);

Continent.PropTypes = {
    continent: PropTypes.shape({
        continent: PropTypes.string.isRequired,
        cases: PropTypes.number.isRequired,
    }).isRequired,
};

export default Continent;
