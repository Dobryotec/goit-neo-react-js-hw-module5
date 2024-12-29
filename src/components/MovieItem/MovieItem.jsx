const MovieItem = ({ title, index }) => {
  return (
    <div>
      {index + 1}. {title}
    </div>
  );
};

export default MovieItem;
