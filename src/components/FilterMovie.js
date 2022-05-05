const FilterMovie = (props) => {
  const handleInputMovie = (ev) => {
    ev.preventDefault();
    props.handleFilterMovie(ev.target.value);
  };
  return (
    <>
      <label htmlFor="findMovie">Movie</label>
      <input
        type="search"
        name="findMovie"
        id="findMovie"
        value={props.filterMovie}
        onChange={handleInputMovie}
      />
    </>
  );
};

export default FilterMovie;
