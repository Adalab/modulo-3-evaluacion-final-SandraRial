import { Link } from 'react-router-dom';

const MovieSceneItem = (props) => {
  return (
    <Link to={`/scene/${props.movie.id}`}>
      <img
        height={300}
        width={250}
        className=""
        alt={props.movie.movie}
        src={props.movie.poster}
      />
      <h3>{props.movie.movie}</h3>
      <p>{props.movie.quote}</p>
      <p>{props.movie.year}</p>
    </Link>
  );
};

export default MovieSceneItem;
