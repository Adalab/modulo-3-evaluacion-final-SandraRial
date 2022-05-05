import { Link } from 'react-router-dom';
const MovieSceneDetail = (props) => {
  return (
    <section>
      <img alt={'Scene'} src={props.movie.poster} />
      <div>
        <h4>{props.movie.name}</h4>
        <p>{props.movie.quote}</p>
        <p>{props.movie.director}</p>
        <p>
          <a href={props.movie.audio}>Escuchar audio</a>
        </p>
        <Link to="/"> Volver</Link>
      </div>
    </section>
  );
};

export default MovieSceneDetail;
