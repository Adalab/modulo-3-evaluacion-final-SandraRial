import { Link } from 'react-router-dom';
const MovieSceneDetail = (props) => {
  return (
    <section>
      <h4>{props.movie.name}</h4>
      <p>{props.movie.quote}</p>
      <p>{props.movie.director}</p>
      {/* Enlace al audio */}
      <Link to="/"> Volver</Link>
    </section>
  );
};

export default MovieSceneDetail;
