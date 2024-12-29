import css from './MovieCastItem.module.css';

import imageDefault from '../../assets/images/image.png';

const MovieCastItem = ({ name, photo, character }) => {
  return (
    <>
      <div className={css['cast-image-wrapper']}>
        <img src={photo ? 'https://image.tmdb.org/t/p/w200' + photo : imageDefault} alt={name} />
      </div>
      <p className={css['cast-name']}>{name}</p>
      <p className={css['cast-character']}>Character: {character}</p>
    </>
  );
};

export default MovieCastItem;
