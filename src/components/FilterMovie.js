const FilterMovie = (props) => {
  const handleInputMovie = (ev) => {
    ev.preventDefault();
    props.handleFilterMovie(ev.target.value);
  };
  const handleKeyPress = (e) => {
    e.key === 'Enter' && e.preventDefault();
  };
  return (
    <div className="form__filter">
      <label className="form__filter--label-input" htmlFor="findMovie">
        Movie
      </label>
      <input
        type="text"
        name="findMovie"
        id="findMovie"
        className="form__filter--search-input"
        value={props.filterMovie}
        onKeyDown={handleKeyPress}
        onChange={handleInputMovie}
      />
    </div>
  );
};

export default FilterMovie;
