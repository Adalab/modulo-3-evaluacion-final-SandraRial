import FilterMovie from './FilterMovie';

const Filters = (props) => {
  return (
    <form>
      <FilterMovie handleFilterMovie={props.handleFilterMovie} />
    </form>
  );
};

export default Filters;
