import "./CharacterItem.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CharacterItems = ({ character }) => {
  return (
    <div className="card-container">
      <img src={character.image} alt="character" />
      <div className="card-description">
        <div className="card-head">
          <h3>{character.name}</h3>
          <p>Species:{character.species}</p>
        </div>
      </div>
      <button className="card-button">learn more</button>
      <button>
          <FontAwesomeIcon icon={faHeart} className="fav-button" />
        </button>
    </div>
  );
};

export default CharacterItems;
