const Status = ({ setFilters, setPageNumber, filters }) => {
    const statuses = ["Alive", "Dead", "Unknown"];
    const handleStatusChange = (selectedStatus) => {
      setFilters((prevFilters) => {
      
        if (prevFilters.status === selectedStatus) {
          return { ...prevFilters, status: "" };
        } else {
            return { ...prevFilters, status: selectedStatus };
        }
      });
      setPageNumber(1);
    };
    return (
      <div className="filter-items">
        {statuses.map((status, index) => (
          <label key={index}>
            <input
              type="checkbox"
              value={status}
              onChange={() => {
                handleStatusChange(status);
              }}
              checked={filters.status === status}
            />
            {status}
            <span className="checkmark-radio"></span>
          </label>
        ))}
      </div>
    );
  };
  
  export default Status;
  