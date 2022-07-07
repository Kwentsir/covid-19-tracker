import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navContainer">
      {location.pathname !== '/' && (
        <div className="backButton">
          <IoIosArrowBack
            onClick={() => {
              navigate(1);
            }}
          />
        </div>
      )}

      <h1 className="title">Covid-19 Tracker</h1>
    </nav>
  );
};

export default Nav;
