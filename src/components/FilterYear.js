const FilterYear = (props) => {
  const handleChange = (ev) => {
    props.handleFilterYear(ev.target.value);
  };
  return (
    <div className="form__select">
      <label htmlFor="filterSelect" className="form__select--label">
        Year
      </label>
      <select
        name="filterSelect"
        id="filterSelect"
        className="form__select--select-year"
        onChange={handleChange}
        value={props.filterYear}
      >
        <option value="all">All</option>
        {props.years.map((year, index) => {
          return (
            <option key={index} value={year}>
              {year}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterYear;
