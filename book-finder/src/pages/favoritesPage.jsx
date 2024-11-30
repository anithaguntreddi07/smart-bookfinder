import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import '../styles/favoritesPage.css';

const FavoritesPage = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="favorites-page">
      <h2>My Favorites</h2>
      <div className="favorites-list">
        {favorites.length ? (
          favorites.map((book) => (
            <div key={book.id} className="favorite-item">
              <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
              <div className="favorite-details">
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.authors?.join(', ')}</p>
                <button
                  className="remove-favorite-btn"
                  onClick={() => removeFavorite(book.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No favorites added yet!</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
