import Offcanvas from "../UI/Offcanvas";
import "./CharacterInfo.css";

const CharacterInfo = ({ hideCharacterInfoHandler, character }) => {
  const statusInfo2 = () => {
    if (character.status == "Dead") {
      return (
        <span className="status2" style={{ backgroundColor: "red" }}>
          {character.status}
        </span>
      );
    } else if (character.status == "Alive") {
      return (
        <span className="status2" style={{ backgroundColor: "green" }}>
          {character.status}
        </span>
      );
    } else {
      return (
        <span
          className="status2"
          style={{ backgroundColor: "grey", padding: "5px 110px" }}
        >
          {character.status}
        </span>
      );
    }
  };

  return (
    <Offcanvas hideCartHandler={hideCharacterInfoHandler}>
      <div className="character-info-container">
        <div className="character-info-head">
          <h2>Know the Character</h2>
          <a
            href="/"
            className="cart-close"
            onClick={(e) => {
              e.preventDefault();
              hideCharacterInfoHandler();
            }}
          >
            x
          </a>
        </div>
        <div className="character-info-background"></div>
        <div className="character-info">
          <img src={character.image} />
          <div className="character-info-main">
            <h3>{character.name}</h3>
            {statusInfo2()}
            <ul>
              <li>
                <b>Gender:</b> {character.gender}
              </li>
              <li>
                <b>Last Location:</b> {character.location.name}
              </li>
              <li>
                <b>Species:</b> {character.species}
              </li>
              <li>
                <b>Type:</b> {character.type}
              </li>
              <li>
                <b>Origin:</b> {character.origin.name}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Offcanvas>
  );
};

export default CharacterInfo;
