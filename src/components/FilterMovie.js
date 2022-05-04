const FilterMovie = (props) => {
  const handleInputMovie = (ev) => {
    ev.preventDefault();
    if (props.filterMovie === null) {
      alert('No hay ninguna escena que coincida con esa palabra');
    } else {
      props.handleFilterMovie(ev.target.value);
    }
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
