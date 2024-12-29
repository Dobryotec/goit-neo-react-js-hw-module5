import css from './MovieReviewItem.module.css';

const MovieReviewItem = ({ author, description }) => {
  return (
    <>
      <p className={css['review-author']}>{author}</p>
      <p className={css['review-description']}>{description}</p>
    </>
  );
};

export default MovieReviewItem;
