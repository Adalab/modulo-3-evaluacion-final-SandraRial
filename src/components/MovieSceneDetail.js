const MovieSceneDetail = (props) => {
  return (
    <section>
      <h4>{props.movie.name}</h4>
      <p>{props.movie.quote}</p>
      <p>{props.movie.director}</p>
      {/* Enlace al audio */}
    </section>
  );
};

export default MovieSceneDetail;
