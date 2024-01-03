import { useState } from "react";
import CharacterItems from "./CharacterItems";
import { useCallback } from "react";
import { useEffect } from "react";
import Card from "../components/UI/Card";
import Pagination from "../components/Pagination/Pagination";
import "./Characters.css";


const Characters = ({ search, pageNumber, setPageNumber,filters,setFilters }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState({});
  
const {gender, status, species}=filters;
//  console.log(gender)
//&status=${filters.status}&gender=${filters.gender}&species=${filters.species}

  const characterList = characters.map((character) => (
    <CharacterItems key={character.id} character={character} />
  ));

  const fetchCharactersHandler = useCallback(async () => {
    setIsloading(true);
    setError(null);
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&gender=${gender}`);
      if (response.status !== 200) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const { results, info } = data;
      setCharacters(results);
      setInfo(info);
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  }, [pageNumber, search, filters]);

  useEffect(() => {
    fetchCharactersHandler();

  }, [fetchCharactersHandler]);

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

    <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    
  </>

  );
};

export default Characters;
