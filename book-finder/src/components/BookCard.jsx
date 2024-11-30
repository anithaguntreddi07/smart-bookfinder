import React, { useContext, useState } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import '../styles/BookCard.css';

const BookCard = ({ book }) => {
  const { addFavorite } = useContext(FavoritesContext);
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  // Truncate description function
  const truncateDescription = (description, maxLength = 150) => {
    if (!description) return 'No description available.';
    return description.length > maxLength ? `${description.slice(0, maxLength)}...` : description;
  };

  return (
    <div
      className="book-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={book.volumeInfo.imageLinks?.thumbnail}
        alt={book.volumeInfo.title}
        className="book-image"
      />
      <h3>{book.volumeInfo.title}</h3>
      <p>By {book.volumeInfo.authors?.join(', ')}</p>
      <p>Rating: {book.volumeInfo.averageRating || 'Not Rated'}</p>

      <button onClick={() => addFavorite(book)}>Add to Favorites</button>

      {showDetails && (
        <div className="book-details-popup">
          <p><strong>Description:</strong> {truncateDescription(book.volumeInfo.description)}</p>
          <p><strong>Published Date:</strong> {book.volumeInfo.publishedDate}</p>
          <p><strong>Publisher:</strong> {book.volumeInfo.publisher || 'Unknown'}</p>
          <p>
            <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">Read more</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default BookCard;
