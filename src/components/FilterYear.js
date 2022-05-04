const FilterYear = (props) => {
  const handleChange = (ev) => {
    props.handleFilterYear(ev.target.value);
  };
  return (
    <>
      <label htmlFor="">Year</label>
      <select name="" id="" onChange={handleChange}>
        <option value="all">Todos los años</option>
        {props.years.map((year, index) => {
          return (
            <option key={index} value={year}>
              {year}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default FilterYear;
