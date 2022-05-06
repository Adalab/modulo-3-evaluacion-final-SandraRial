import '../styles/App.scss';
import '../styles/FiltersForm.scss';
import '../styles/MovieSceneListItems.scss';
import getDataApi from '../services/api';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import MovieSceneDetail from './MovieSceneDetail';
import ls from '../services/localStorage';

function App() {
  const [dataMovies, setDataMovies] = useState(ls.get('movies', []));
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYear, setFilterYear] = useState('all');
  const [status, setStatus] = useState('Loading');

  useEffect(() => {
    if (dataMovies.length === 0) {
      console.log(status, dataMovies.length);
      getDataApi().then((data) => {
        setDataMovies(data);
        setStatus('Loaded');
      });
    }
  }, [dataMovies.length, status]);

  useEffect(() => {
    ls.set('movies', dataMovies);
    setStatus('Loaded');
  }, [dataMovies]);

  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };

  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

  const handleReset = (ev) => {
    ev.preventDefault();
    setFilterMovie('');
    setFilterYear('all');
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
  const dataPath = matchPath('/scene/:id', pathname);

  const sceneIndex = dataPath !== null ? dataPath.params.id : null;
  const sceneFound = dataMovies.find(
    (movie) => movie.id === parseInt(sceneIndex)
  );
  return (
    <>
      <header className="header">
        <h1>~ Owen Wilson's "wow" ~</h1>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleFilterMovie={handleFilterMovie}
                  filterMovie={filterMovie}
                  handleFilterYear={handleFilterYear}
                  filterYear={filterYear}
                  years={getYear()}
                  handleReset={handleReset}
                />
                <MovieSceneList
                  movies={sortFunction}
                  status={status}
                  filterMovie={filterMovie}
                />
              </>
            }
          />

          <Route
            path="/scene/:id"
            element={<MovieSceneDetail movie={sceneFound} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
