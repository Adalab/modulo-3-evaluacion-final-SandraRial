import '../styles/App.scss';
import getDataApi from '../services/api';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import MovieSceneDetail from './MovieSceneDetail';
// import ls from '../services/localStorage';

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYear, setFilterYear] = useState('all');

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

  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

  const userFilter = dataMovies
    .filter((movie) => {
      return movie.movie.toLowerCase().includes(filterMovie.toLowerCase());
    })
    .filter((movie) => {
      if (filterYear === 'all') {
        return true;
      } else {
        return movie.year === parseInt(filterYear);
      }
    });

  const getYear = () => {
    const yearsMovies = dataMovies.map((movie) => movie.year);
    const uniqueYear = new Set(yearsMovies);
    const uniques = [...uniqueYear];
    const uniqueOrderYear = uniques.sort();
    console.log(uniqueOrderYear);
    return uniqueOrderYear;
  };

  const sortFunction = userFilter.sort(function (a, b) {
    const nameA = a.movie;
    const nameB = b.movie;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const { pathname } = useLocation();
  const dataPath = matchPath('/scene/:sceneId', pathname);
  console.log(dataPath);

  const sceneId = dataPath !== null ? dataPath.params.sceneId : null;
  const sceneFound = dataMovies.find((movie) => movie.id === sceneId);

  return (
    <>
      <h1>Owen Wilson's "wow"</h1>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleFilterMovie={handleFilterMovie}
                  handleFilterYear={handleFilterYear}
                  years={getYear()}
                />
                <MovieSceneList movies={sortFunction} />
              </>
            }
          />
          <Route
            path="/scene/:sceneId"
            element={<MovieSceneDetail movie={sceneFound} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
