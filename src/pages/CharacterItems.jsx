import "./CharacterItem.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { cartActions } from "../store";

const CharacterItems = ({ character }) => {
  const dispatch=useDispatch();

  const handleAddToCart=(item)=>{
    dispatch(cartActions.addToCart(item))
  
  }
const statusInfo=() => {
  if (character.status == "Dead") {
    return (<span className="status" style={{backgroundColor:'red'}}>{character.status}</span>)
  }
  else if (character.status == "Alive") {
    return (<span className="status" style={{backgroundColor:'green'}}>{character.status}</span>)
  }
  else  {
    return (<span className="status" style={{backgroundColor:'grey'}}>{character.status}</span>)
  }
}

  return (
    <div className="card-container">
      <img src={character.image} alt="character" />
      <div className="card-description">
        <div className="card-head">
          <h3>{character.name}</h3>
          <p><b>Species:</b> {character.species}</p>
          <p> <b>Last Location:</b> {character.location.name}</p>
        </div>
      </div>
      <button className="card-button">learn more</button>
      <button onClick={()=>handleAddToCart(character)}>
        <FontAwesomeIcon icon={faHeart} className="fav-button" />
      </button>
      {statusInfo()}
    
    </div>
  );
};

export default CharacterItems;
