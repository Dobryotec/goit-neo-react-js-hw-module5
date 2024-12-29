import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams, Link } from 'react-router-dom';

import { getMovieDetails } from '../../api/movies';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Spinner from '../../components/Spinner/Spinner';

import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();

  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!movieId) return;
      try {
        setIsLoading(true);
        setError(false);
        const result = await getMovieDetails(movieId);
        setMovie(result);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const { title, overview, poster_path, genres = [], vote_average } = movie || {};

  return (
    <>
      <Link to={backLink.current} className={css['back-btn']}>
        Go back
      </Link>
      {!error && movie && !isLoading && (
        <>
          <div className={css['details-wrapper']}>
            <div className={css['details-image-wrapper']}>
              <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt="poster" />
            </div>
            <div className={css['details-content-block']}>
              <h1 className={css['details-title']}>{title}</h1>
              <p className={css['details-text']}>User Score: {vote_average}</p>
              <p className={css['details-overview']}>Overview</p>
              <p className={css['details-description']}>{overview}</p>
              <p className={css['details-genres']}>Genres</p>
              <ul className={css['details-genres-list']}>
                {genres.map(({ name }, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={css['details-additional-block']}>
            <h2 className={css['additional-title']}>Additional information</h2>
            <div className={css['details-additional-links']}>
              <Link to="cast">Cast</Link>
              <Link to="reviews">Reviews</Link>
            </div>
          </div>
          <Outlet />
        </>
      )}
      {error && !isLoading && <ErrorMessage />}
      {!error && isLoading && <Spinner />}
    </>
  );
};

export default MovieDetailsPage;
