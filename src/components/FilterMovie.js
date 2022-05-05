const FilterMovie = (props) => {
  const handleInputMovie = (ev) => {
    ev.preventDefault();
    props.handleFilterMovie(ev.target.value);
  };
  const handleKeyPress = (e) => {
    e.key === 'Enter' && e.preventDefault();
  };
  return (
    <>
      <label htmlFor="findMovie">Movie</label>
      <input
        type="text"
        name="findMovie"
        id="findMovie"
        value={props.filterMovie}
        onKeyDown={handleKeyPress}
        onChange={handleInputMovie}
      />
    </>
  );
};

export default FilterMovie;
