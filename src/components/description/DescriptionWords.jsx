import React from 'react';
import PropTypes from 'prop-types';
import ReviewScore from './ReviewScore';
import './description.css';

const DescriptionWords = ({ movie }) => (
  <div>
    <div className="description-title">
      <a className="movie-title" href="link">{movie.movieName}</a>
      <span className="movie-year">
        (
        {movie.year}
        )
      </span>
    </div>
    <div className="description-infos">
      <span className="rating">{movie.rating}</span>
      <span className="genre">{movie.genre}</span>
    </div>
    <ReviewScore reviewScore={movie.reviewScore} />
    <p className="description-paragraph">
      {movie.description}
    </p>
  </div>
);

DescriptionWords.propTypes = {
  movie: PropTypes.shape({
    movieName: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    reviewScore: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    stars: PropTypes.array.isRequired,
  }).isRequired,
};

export default DescriptionWords;
