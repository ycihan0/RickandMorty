import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";


const Header = ({showCartHandler}) => {
  const navigate=useNavigate();
  const goToHomePage=()=>{navigate("/")};
  // const dispatch=useDispatch();
  // const showCartHandler=()=>{dispatch(cartActions.showCartHandler())}
  
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="images\logo.png" alt="logo" onClick={goToHomePage} />
      </a>
      <nav className="navbar">
      
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>
          Characters
        </NavLink>
        <NavLink to="/episodes" className={({ isActive }) => (isActive ? "active" : undefined)}>
          Episodes
        </NavLink>
      </nav>
      <div className="buttons">
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button onClick={showCartHandler}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>
  );
};

export default Header;
