import { Routes, Route } from 'react-router-dom';

import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));
const Container = lazy(() => import('./components/Container/Container'));

import css from './App.module.css';
import Spinner from './components/Spinner/Spinner';

function App() {
  return (
    <>
      <header className={css.header}>
        <Container>
          <Navigation />
        </Container>
      </header>
      <main className={css.main}>
        <Container>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
                <Route path="cast" element={<MovieCast />} />
                <Route path="reviews" element={<MovieReviews />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Container>
      </main>
    </>
  );
}

export default App;
