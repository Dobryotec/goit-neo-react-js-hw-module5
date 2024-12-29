import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { getMovieCast } from '../../api/movies';

import MovieCastItem from '../MovieCastItem/MovieCastItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';

import css from './MovieCast.module.css';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      if (!movieId) return;
      try {
        setIsLoading(true);
        setError(false);
        const { cast } = await getMovieCast(movieId);
        setCast(cast);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {cast && !error && !isLoading && (
        <ul className={css['cast-list']}>
          {cast.map(({ name, profile_path, id, character }) => (
            <li className={css['cast-item']} key={id}>
              <MovieCastItem name={name} photo={profile_path} character={character} />
            </li>
          ))}
        </ul>
      )}
      {error && !isLoading && <ErrorMessage />}
      {!error && isLoading && <Spinner />}
    </>
  );
};

export default MovieCast;
