import OwenImage from '../images/Owen-Wilson.jpg';

const MovieSceneNotFound = (props) => {
  return (
    <section className="notFound">
      <h4 className="notFound__title">Not found</h4>
      <p className="notFound__text">
        Ningún título coincide con {props.filterMovie}
      </p>
      <img src={OwenImage} alt="OwenImage" />
    </section>
  );
};
export default MovieSceneNotFound;
