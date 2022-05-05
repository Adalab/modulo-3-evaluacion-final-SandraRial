import MovieSceneItem from './MovieSceneItem';
import MovieSceneNotFound from './MovieSceneNotFound';

const MovieSceneList = (props) => {
  if (props.movies.length === 0) {
    return <MovieSceneNotFound movie={props.filterMovie} />;
  }
  const movieSceneList = props.movies.map((movie, index) => {
    return (
      <li key={index}>
        <MovieSceneItem movie={movie} />
      </li>
    );
  });
  return (
    <section>
      <ul>{movieSceneList}</ul>
    </section>
  );
};

export default MovieSceneList;
