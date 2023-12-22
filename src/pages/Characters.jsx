import { useState } from "react";
import CharacterItems from "./CharacterItems";
import { useCallback } from "react";
import { useEffect } from "react";
import Card from "../components/UI/Card";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
 
  
  const fetchCharactersHandler = useCallback(async () => {
    
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    
    
    setCharacters(data.results);
   
  });
  useEffect(() => {
    fetchCharactersHandler();
    fetchCharactersHandler();
  }, []);

  const characterList = characters.map((character) => (
    <CharacterItems key={character.id} character={character} />
  ));

 
  


  return <Card>{characterList}</Card>;
};

export default Characters;
