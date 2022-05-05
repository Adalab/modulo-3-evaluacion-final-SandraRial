import MovieSceneItem from './MovieSceneItem';
import MovieSceneNotFound from './MovieSceneNotFound';

const MovieSceneList = (props) => {
  const movieSceneList = props.movies.map((movie, index) => {
    return (
      <li key={index}>
        <MovieSceneItem movie={movie} />
      </li>
    );
  });
  return (
    <section>
      {props.status === 'Loading' ? (
        <p>Cargando lista de escenas...</p>
      ) : props.movies.length === 0 && props.filterMovie !== '' ? (
        <MovieSceneNotFound movie={props.filterMovie} />
      ) : (
        <ul>{movieSceneList}</ul>
      )}
    </section>
  );
};

export default MovieSceneList;
