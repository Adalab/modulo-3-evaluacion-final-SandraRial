const MovieSceneItem = (props) => {
  return (
    <>
      <img
        height={300}
        width={250}
        className=""
        alt={props.movie.name}
        src={props.movie.poster}
      />
      <h3>{props.movie.movie}</h3>
      <p>{props.movie.quote}</p>
      <p>{props.movie.year}</p>
    </>
  );
};

export default MovieSceneItem;
