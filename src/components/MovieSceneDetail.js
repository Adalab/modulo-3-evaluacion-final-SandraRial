import { Link } from 'react-router-dom';
const MovieSceneDetail = (props) => {
  return (
    <section>
      <img alt={'Scene'} src={props.movie.poster} />
      <div>
        <h4>Title: {props.movie.movie}</h4>
        <p>Quote: {props.movie.quote}</p>
        <p>Director: {props.movie.director}</p>
        <p>
          <a href={props.movie.audio}>Listen to audio</a>
        </p>
        <Link to="/"> Back</Link>
      </div>
    </section>
  );
};

export default MovieSceneDetail;
