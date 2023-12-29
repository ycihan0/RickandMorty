import Offcanvas from "../UI/Offcanvas"

const CharacterInfo = ({hideCharacterInfoHandler,character}) => {
  console.log(character);
  return (
    <Offcanvas hideCartHandler={hideCharacterInfoHandler}>
 {character.name}
    </Offcanvas>
  )
}

export default CharacterInfo
