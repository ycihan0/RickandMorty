import { useCallback, useEffect, useState } from "react";
import CharacterItems from "../components/CharacterItem/CharacterItems";
import Card from "../components/UI/Card";
import PaginationCharacter from "../components/Pagination/PaginationCharacter";


const Characters = ({ search, pageNumber, setPageNumber, filters }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState({});
  const [isPagination, setIsPagination] = useState(true);

  const { gender, status, species } = filters;

  const characterList = characters.map((character) => (
    <CharacterItems key={character.id} character={character} />
  ));

  const fetchCharactersHandler = useCallback(async () => {
    setIsloading(true);
    setError(null);
    setIsPagination(true);
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&gender=${gender}&species=${species}&status=${status}`
      );
      if (response.status !== 200) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const { results, info } = data;
      setCharacters(results);
      setInfo(info);
    } catch (error) {
      setError(error.message);
      setIsPagination(false);
    }
    setIsloading(false);
  }, [pageNumber, search, gender, status, species]);

  useEffect(() => {
    fetchCharactersHandler();
  }, [fetchCharactersHandler]);

  let content = <p>Found no characters!</p>;

  if (characters.length > 0) {
    content = characterList;
  }

   if (error) {
    
    content = (
      <div
        style={{
          position: "relative",
          height:"500px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "left",
         
        }}
      >
        <img src="./images/rick.png" alt="Character not found" style={{width:"120px"}}/>
        <h2>Character not found</h2>
        
      </div>
       
    );
   
  }

  if (isLoading) {
    content = <h2>Loading...</h2>;
  }
  return (
    <>
      <Card>{content}</Card>
      {isPagination &&
        <PaginationCharacter
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      }
     
    </>
  );
};

export default Characters;
