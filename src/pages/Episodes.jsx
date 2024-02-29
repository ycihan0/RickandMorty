import { useCallback, useEffect, useState } from "react";
import Table from "../components/Table/Table";
import Card from "../components/UI/Card";
import CharacterItems from "../components/CharacterItem/CharacterItems";

const Episodes = ({ search, filters }) => {
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState([]);
  const [selectedEpisodeCopy, setSelectedEpisodeCopy] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState({});
  const [episodePageNumber, setEpisodePageNumber] = useState(1);

  const characterList = selectedEpisode.map((character) => (
    <CharacterItems key={character.id} character={character} />
  ));

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
      setEpisodes(results);
      setInfo(info);
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  }, [episodePageNumber]);

  useEffect(() => {
    fetchEpisodesHandler();
  }, [fetchEpisodesHandler]);


  useEffect(() => {
    // Arama işlemini burada gerçekleştir
    const filteredEpisodes = selectedEpisodeCopy.filter((episode) =>
      episode.name.toLowerCase().includes(search.toLowerCase())
    );
  
    // Filtrelenmiş bölümleri geçici bir diziye ata
    let tempSelectedEpisode = filteredEpisodes;
  
    // Cinsiyet filtresi varsa, ona göre filtrele
    if (filters.gender !== "") {
      tempSelectedEpisode = tempSelectedEpisode.filter(
        (episode) =>
          episode.gender.toLowerCase() === filters.gender.toLowerCase()
      );
    }
  
    // Durum filtresi varsa, ona göre filtrele
    if (filters.status !== "") {
      tempSelectedEpisode = tempSelectedEpisode.filter(
        (episode) =>
          episode.status.toLowerCase() === filters.status.toLowerCase()
      );
    }
  
    // Tür filtresi varsa, ona göre filtrele
    if (filters.species !== "") {
      tempSelectedEpisode = tempSelectedEpisode.filter(
        (episode) =>
          episode.species.toLowerCase() === filters.species.toLowerCase()
      );
    }
  
    // Filtrelenmiş bölümleri state'e ata
    setSelectedEpisode(tempSelectedEpisode);
  }, [search, filters, selectedEpisodeCopy]);
  
  

  let content = <p></p>;

  if (selectedEpisode.length > 0) {
    content = characterList;
  }

  if (selectedEpisode.length == 0) {
    content = (
      <div
        style={{
          position: "relative",
          height: "500px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "left",
        }}
      >
        <img
          src="./images/rick.png"
          alt="Character not found"
          style={{ width: "120px" }}
        />
        <h2>Character not found</h2>
      </div>
    );
  }

  if (isLoading) {
    content = <h2>Loading...</h2>;
  }

  return (
    <main>
      <Table
        episodes={episodes}
        setSelectedEpisode={setSelectedEpisode}
        setSelectedEpisodeCopy={setSelectedEpisodeCopy}
        episodePageNumber={episodePageNumber}
        setEpisodePageNumber={setEpisodePageNumber}
        info={info}
        setError={setError}
        selectedEpisode={selectedEpisode}
        search={search}
      />
      <Card>{content}</Card>
    </main>
  );
};

export default Episodes;
