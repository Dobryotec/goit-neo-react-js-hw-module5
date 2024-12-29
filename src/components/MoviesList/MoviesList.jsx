import { Link, useLocation } from 'react-router-dom';

import MovieItem from '../MovieItem/MovieItem';

import css from './MovieList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(({ title, id }, index) => (
        <li key={id} className={css.item}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MovieItem title={title} index={index} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
