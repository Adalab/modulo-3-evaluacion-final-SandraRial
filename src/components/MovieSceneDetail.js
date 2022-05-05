import { Link } from 'react-router-dom';
const MovieSceneDetail = (props) => {
  return (
    <div className="detail">
      <img className="detail__image" alt={'Scene'} src={props.movie.poster} />
      <div className="detail__box">
        <h4 className="detail__box--title">{props.movie.movie}</h4>
        <p className="detail__box--quote">{props.movie.quote}</p>
        <p className="detail__box--director">
          Director: {props.movie.director}
        </p>
        <p>
          <a href={props.movie.audio} className="detail__box--audio">
            Listen to audio
          </a>
        </p>
        <Link to="/" className="detail__back">
          {' '}
          Back
        </Link>
      </div>
    </div>
  );
};

export default MovieSceneDetail;
