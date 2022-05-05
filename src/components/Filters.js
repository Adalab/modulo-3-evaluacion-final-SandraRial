import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

const Filters = (props) => {
  return (
    <form className="form">
      <FilterMovie
        handleFilterMovie={props.handleFilterMovie}
        filterMovie={props.filterMovie}
      />
      <FilterYear
        handleFilterYear={props.handleFilterYear}
        filterYear={props.filterYear}
        years={props.years}
      />
      <button className="form__reset" onClick={props.handleReset}>
        Reset
      </button>
    </form>
  );
};

export default Filters;
