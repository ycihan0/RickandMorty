const Gender = ({ setFilters, setPageNumber, filters }) => {
  const genders = ["female", "male", "genderless", "unknown"];
  const handleGenderChange = (selectedGender) => {
    setFilters((prevFilters) => {
      // Seçili cinsiyet zaten varsa ve tekrar tıklanıyorsa filtreyi kaldır
      if (prevFilters.gender === selectedGender) {
        return { ...prevFilters, gender: "" };
      } else {
        // Aksi takdirde seçili cinsiyeti filtre olarak ayarla
        return { ...prevFilters, gender: selectedGender };
      }
    });
    setPageNumber(1);
  };
  return (
    <div className="filter-items">
      {genders.map((gender, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={gender}
            onChange={() => {
              handleGenderChange(gender);
            }}
            checked={filters.gender === gender}
          />
          {gender}
          <span className="checkmark-radio"></span>
        </label>
      ))}
    </div>
  );
};

export default Gender;
