import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

const Filters = (props) => {
  return (
    <form>
      <FilterMovie handleFilterMovie={props.handleFilterMovie} />
      <FilterYear
        handleFilterYear={props.handleFilterYear}
        years={props.years}
      />
    </form>
  );
};

export default Filters;
