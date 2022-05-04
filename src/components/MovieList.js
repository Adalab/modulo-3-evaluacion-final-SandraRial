import MovieItem from './MovieItem';

const MovieList = (props) => {
  const movieSceneList = props.movies.map((movie, index) => {
    return (
      <li key={index}>
        <MovieItem movie={movie} />
      </li>
    );
  });
  return (
    <section>
      <ul>{movieSceneList}</ul>
    </section>
  );
};

export default MovieList;
