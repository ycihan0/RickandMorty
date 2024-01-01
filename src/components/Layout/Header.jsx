import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = ({ showCartHandler, setSearch,setPageNumber }) => {
  const [isFabarsActive, setIsFabarsActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsFabarsActive((prevIsActive) => !prevIsActive);
  };
  
  const searchOpen=()=>{
    setIsSearchActive((prevIsActive) => !prevIsActive);
  }
 
  const goToHomePage = () => {
    navigate("/");
  };
  const cartItemCount = useSelector((state) => state.cart.items.length);
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="images\logo.png" alt="logo" onClick={goToHomePage} />
      </a>
      <nav className={`navbar ${isFabarsActive ? "active" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Characters
        </NavLink>
        <NavLink
          to="/episodes"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Episodes
        </NavLink>
      </nav>
      <div className="buttons">
        <button onClick={searchOpen}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        {isSearchActive && <div className="search-form">
          <input
            type="text"
            onChange={(e)=>{
              setSearch(e.target.value);
              setPageNumber(1);
            }}
            className="search-input"
            placeholder="searh here"
          />
          <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div> }
        
        <button onClick={showCartHandler} className="faHeart">
          <FontAwesomeIcon icon={faHeart} />
          {cartItemCount == 0 ? (
            ""
          ) : (
            <span className="cart-icon">{cartItemCount}</span>
          )}
        </button>
        <button className="faBars" onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>
  );
};

export default Header;
