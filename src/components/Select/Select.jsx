import { useState } from "react";
import "./Select.css";
const Select = ({episodes}) => {

    const [selectedOption, setSelectedOption] = useState('choose');
    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
  return (
    <div>
       <select value={selectedOption} onChange={handleOptionChange}>
     <option value="choose">choose..</option>
      {episodes.map((episode)=>( <option key={episode.id} value={episode.id}>{episode.episode}</option>))}
     </select>

      <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default Select
