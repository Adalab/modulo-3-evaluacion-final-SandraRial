import MovieSceneItem from './MovieSceneItem';
import MovieSceneNotFound from './MovieSceneNotFound';

const MovieSceneList = (props) => {
  const movieSceneList = props.movies.map((movie, index) => {
    return (
      <li key={index} className="list__item">
        <MovieSceneItem movie={movie} />
      </li>
    );
  });
  return (
    <section>
      {props.status === 'Loading' ? (
        <p className="loading">Cargando lista de escenas...</p>
      ) : props.movies.length === 0 && props.filterMovie !== '' ? (
        <MovieSceneNotFound movie={props.filterMovie} />
      ) : (
        <ul className="list">{movieSceneList}</ul>
      )}
    </section>
  );
};

export default MovieSceneList;
