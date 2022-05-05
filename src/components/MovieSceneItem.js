import { Link } from 'react-router-dom';

const MovieSceneItem = (props) => {
  return (
    <Link to={`/scene/${props.movie.id}`} className="link">
      <img
        className="list__item--image img"
        alt={props.movie.movie}
        src={props.movie.poster}
      />
      <div className="list__item--box">
        <h3 className="list__item--box--title-year">
          {props.movie.movie} - {props.movie.year}
        </h3>

        <p className="list__item--box--quote">{props.movie.quote}</p>
      </div>
    </Link>
  );
};

export default MovieSceneItem;
