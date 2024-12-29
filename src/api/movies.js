import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGU4ZjFmNmYwNWY4YmJlYjk0ZmFjODEzZGNjNDg2YyIsIm5iZiI6MTY4MTMwODQ1OS40MzYsInN1YiI6IjY0MzZiYjJiOTQ1ZDM2MDEwMjFiYmY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6JaGVcA03neyuJ3C_akKOq1ujGWvVk6RRfbN6XbH_ww',
  },
};

export const getPopularMoviesOfTheDay = async () => {
  const { data } = await axios.get('trending/movie/day?language=en-US', options);
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`movie/${id}?language=en-US`, options);
  return data;
};

export const getMovieCast = async id => {
  const { data } = await axios.get(`movie/${id}/credits?language=en-US`, options);

  return data;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`, options);

  return data;
};

export const getMovieSearchWord = async query => {
  const { data } = await axios.get(`search/movie?query=${query}&language=en-US`, options);
  return data;
};
