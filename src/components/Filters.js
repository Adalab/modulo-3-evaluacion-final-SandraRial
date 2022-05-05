import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

const Filters = (props) => {
  const handleInputSearch = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleInputSearch}>
      <FilterMovie
        handleFilterMovie={props.handleFilterMovie}
        filterMovie={props.filterMovie}
      />
      <FilterYear
        handleFilterYear={props.handleFilterYear}
        filterYear={props.filterYear}
        years={props.years}
      />
      <button onClick={props.handleReset}>Reset</button>
    </form>
  );
};

export default Filters;
