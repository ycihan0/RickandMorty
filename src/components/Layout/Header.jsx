import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Filter from "../Filter/Filter";

const Header = ({
  showCartHandler,
  setSearch,
  setPageNumber,
  filters,
  setFilters,
}) => {
  const [isFabarsActive, setIsFabarsActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const navigate = useNavigate();

  const handleFilterClick = () => {
    setIsFilterActive((prevIsActive) => !prevIsActive);
    setIsFabarsActive(false);
    setIsSearchActive(false);
  };

  const handleBarsClick = () => {
    setIsFabarsActive((prevIsActive) => !prevIsActive);
    setIsFilterActive(false);
    setIsSearchActive(false);
  };

  const handleSearchClick = () => {
    setIsSearchActive((prevIsActive) => !prevIsActive);
    setIsFilterActive(false);
    setIsFabarsActive(false);
  };

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

      {/* ================Buttons================================= */}

      <div className="buttons">
        <button onClick={handleFilterClick}>
          <FontAwesomeIcon icon={faFilter} />
        </button>
        {isFilterActive && (
          <div className="filter-form">
            <Filter filters={filters} setFilters={setFilters} setPageNumber={setPageNumber} />
          </div>
        )}
        <button onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        {isSearchActive && (
          <div className="search-form">
            <input
              type="text"
              onChange={(e) => {
                if(e.target.value.length>2){
                setSearch(e.target.value);
                setPageNumber(1);}
                if(e.target.value.length==0){
                  setSearch("");
                setPageNumber(1);
                }
               }}
              className="search-input"
              placeholder="searh character"
            />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        )}
        <button onClick={showCartHandler} className="faHeart">
          <FontAwesomeIcon icon={faHeart} />
          {cartItemCount == 0 ? (
            ""
          ) : (
            <span className="cart-icon">{cartItemCount}</span>
          )}
        </button>
        <button className="faBars" onClick={handleBarsClick}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>
  );
};

export default Header;
