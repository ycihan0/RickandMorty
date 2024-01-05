import { useCallback, useEffect, useState } from "react";
import Select from "../components/Select/Select";
import Table from "../components/Table/Table";
import Card from "../components/UI/Card";
import CharacterItems from "./CharacterItems";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode]=useState([])
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState({});
  const [id, setId] = useState(1);

const [episodePageNumber, setEpisodePageNumber]=useState(1);
console.log(selectedEpisode);
  const fetchEpisodesHandler = useCallback(async () => {
    setIsloading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode/?page=${episodePageNumber}`
      );
      if (response.status !== 200) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const { results, info } = data;

      // const episodePromises = results.map((episode) => {
      //   return fetch(episode).then((res) => res.json());
      // });
      // const episodesData = await Promise.all(episodePromises);

      setEpisodes(results);
      setInfo(info);
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  }, []);


  useEffect(() => {
    fetchEpisodesHandler();
  }, [fetchEpisodesHandler]);

  
  // const characterList = characters.map((character) => (
  //   <CharacterItems key={character.id} character={character} />
  // ));
  // let content = <p>Found no episodes!</p>;

  // if (episodes.length > 0) {
  //   content = characterList;
  // }

  //  if (error) {

  //   content = (
  //     <div
  //       style={{
  //         position: "relative",
  //         height:"500px",
  //         top: "50%",
  //         left: "50%",
  //         transform: "translate(-50%, -50%)",
  //         textAlign: "left",

  //       }}
  //     >
  //       <img src="./images/rick.png" alt="Character not found" style={{width:"120px"}}/>
  //       <h2>Episode not found</h2>

  //     </div>

  //   );

  // }

  // if (isLoading) {
  //   content = <h2>Loading...</h2>;
  // }
  const characterList = selectedEpisode.map((character) => (
    <CharacterItems key={character.id} character={character} />
  ));


  return (
    <div>
        <Table episodes={episodes} setSelectedEpisode={setSelectedEpisode}/>

        <Card>{characterList}</Card>
    </div>
  );
};

export default Episodes;
