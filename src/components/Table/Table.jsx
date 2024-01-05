import "./Table.css";

const Table = ({episodes, setSelectedEpisode}) => {

const handleRowClick =(characters)=>{
    const characterPromises=characters.map((characterUrl)=>fetch(characterUrl).then((res)=>res.json()));
    Promise.all(characterPromises).then((characterDetail)=>{setSelectedEpisode(characterDetail);}).catch((error)=>{console.log(error);})

};

  return (
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
      
      {episodes.map((episode)=>( 
      <tr key={episode.id} onClick={()=>{handleRowClick(episode.characters)}}>
            <td>
             {parseInt(episode.episode.slice(1,3),10)}. Season
            </td>
            <td>
            {parseInt(episode.episode.slice(1,3),10)}. Episode
            </td>
            <td>
            {episode.name}
            </td>
            <td>
            {episode.air_date}
            </td>
      </tr>
       ))}
      
      
    </tbody>
  </table>
  )
}

export default Table
