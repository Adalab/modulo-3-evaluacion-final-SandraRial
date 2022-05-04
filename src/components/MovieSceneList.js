import MovieSceneItem from './MovieSceneItem';

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
      <ul>{movieSceneList}</ul>
    </section>
  );
};

export default MovieSceneList;
