import "./Table.css";

const Table = ({
  episodes,
  setSelectedEpisode,
  episodePageNumber,
  setEpisodePageNumber,
  info,
  setError,
}) => {
  const handleRowClick = (characters) => {
    const characterPromises = characters.map((characterUrl) =>
      fetch(characterUrl).then((res) => res.json())
    );
    Promise.all(characterPromises)
      .then((characterDetail) => {
        setSelectedEpisode(characterDetail);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handlePreviousPage = () => {
    if (episodePageNumber > 1) {
      setEpisodePageNumber(episodePageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (episodePageNumber < info.pages) {
      setEpisodePageNumber(episodePageNumber + 1);
    }
  };

  return (
    <div className="table-container">
      <img src="images/family.png" />
      <table>
        <thead>
          <tr>
            <th>Season</th>
            <th>Episode</th>
            <th>Episode Name</th>
            <th>Air Date</th>
          </tr>
        </thead>

        <tbody>
          {episodes.map((episode) => (
            <tr
              key={episode.id}
              onClick={() => {
                handleRowClick(episode.characters);
              }}
            >
              <td>{parseInt(episode.episode.slice(1, 3), 10)}. Season</td>
              <td>{parseInt(episode.episode.slice(4, 6), 10)}. Episode</td>
              <td>{episode.name}</td>
              <td>{episode.air_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
        <button
          onClick={handlePreviousPage}
          className="pagination-previous"
          disabled={episodePageNumber === 1}
        >
          {"<"}
        </button>
        <button
          onClick={handleNextPage}
          className="pagination-next"
          disabled={episodePageNumber === info.pages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Table;
