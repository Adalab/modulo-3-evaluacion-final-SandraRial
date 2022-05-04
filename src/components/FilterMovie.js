const FilterMovie = (props) => {
  const handleInputMovie = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };
  return (
    <>
      <label htmlFor="">Movie</label>
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
