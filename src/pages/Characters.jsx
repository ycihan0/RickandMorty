import { useState } from "react";
import CharacterItems from "./CharacterItems";
import { useCallback } from "react";
import { useEffect } from "react";
import Card from "../components/UI/Card";


const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const characterList = characters.map((character) => (
      <CharacterItems key={character.id} character={character} />
    ));

  const fetchCharactersHandler = useCallback(async () => {
    setIsloading(true);
    setError(null);
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      if (response.status !== 200) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const { results, info } = data;
      setCharacters(results);
    } catch (error) {
      setError(error.message);
     
    }
    setIsloading(false);
  });

  useEffect(() => {
    fetchCharactersHandler();
   
  }, [ ]);
 

  let content = <p>Found no products!</p>;

  if (characters.length > 0) {
    content = characterList;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

 
  return (<>

  <Card>{content}</Card>
  </>
    
  );
};

export default Characters;
