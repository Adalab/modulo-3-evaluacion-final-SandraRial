import { Link } from 'react-router-dom';

const MovieSceneNotFound = (props) => {
  return (
    <section>
      <h4>La búsqueda no coincide con ninguna escena</h4>
      <Link to="/">Volver</Link>
    </section>
  );
};
export default MovieSceneNotFound;
