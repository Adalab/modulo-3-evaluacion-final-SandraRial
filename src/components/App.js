import '../styles/App.scss';
import getDataApi from '../services/api';
import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import Filters from './Filters';
// import ls from '../services/localStorage';

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');

  useEffect(() => {
    if (dataMovies.length === 0) {
      getDataApi().then((data) => {
        setDataMovies(data);
      });
    }
  });

  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };

  const userFilter = dataMovies.filter((movie) => {
    return movie.movie.toLowerCase().includes(filterMovie.toLowerCase());
  });

  return (
    <div>
      <h1>Hola mundo</h1>
      <Filters handleFilterMovie={handleFilterMovie} />
      <MovieList movies={userFilter} />
    </div>
  );
}

export default App;
