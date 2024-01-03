const Species = ({ setFilters, setPageNumber, filters }) => {
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  const handleSpeciesChange = (selectedSpecies) => {
    setFilters((prevFilters) => {
      if (prevFilters.species === selectedSpecies) {
        return { ...prevFilters, species: "" };
      } else {
        return { ...prevFilters, species: selectedSpecies };
      }
    });
    setPageNumber(1);
  };
  return (
    <div className="filter-items">
      {species.map((specify, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={specify}
            onChange={() => {
              handleSpeciesChange(specify);
            }}
            checked={filters.species === specify}
          />
          {specify}
          <span className="checkmark-radio"></span>
        </label>
      ))}
    </div>
  );
};

export default Species;
