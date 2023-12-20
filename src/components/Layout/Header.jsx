import "./header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="images\logo.png" alt="logo" />
      </a>
      <nav className="navbar">
        <a href="#" className="active">
          Characters
        </a>
        <a href="#" className="">
          Episodes
        </a>
      </nav>
      <div className="buttons">
        <button >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button>
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
