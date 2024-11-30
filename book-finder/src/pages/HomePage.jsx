import React, { useState, useContext } from 'react';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import '../styles/HomePage.css';
import useFetchBooks from '../hooks/useFetchBooks';
import { FavoritesContext } from '../context/FavoritesContext';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const { books, fetchBooks } = useFetchBooks();
  const { addFavorite } = useContext(FavoritesContext);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    fetchBooks(searchQuery);
  };

  const handleAddFavorite = (book) => {
    addFavorite(book);
    setPopupMessage(`${book.volumeInfo.title} has been added to favorites!`);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Popup disappears after 3 seconds
  };

  return (
    <div className="home-page">
      <div className="categories">
        <button onClick={() => handleSearch('fiction')}>Fiction</button>
        <button onClick={() => handleSearch('non-fiction')}>Non-Fiction</button>
        <button onClick={() => handleSearch('mystery')}>Mystery</button>
        <button onClick={() => handleSearch('science fiction')}>Sci-Fi</button>
        <button onClick={() => handleSearch('fantasy')}>Fantasy</button>
        <button onClick={() => handleSearch('history')}>History</button>
        <button onClick={() => handleSearch('biography')}>Biography</button>
        <button onClick={() => handleSearch('horror')}>Horror</button>
        <button onClick={() => handleSearch('thriller')}>Thriller</button>
        <button onClick={() => handleSearch('poetry')}>Poetry</button>
        <button onClick={() => handleSearch('romance')}>Romance</button> 
        <button onClick={() => handleSearch('philosophy')}>Philosophy</button>
        <button onClick={() => handleSearch('travel')}>Travel</button>
      </div>
      <SearchBar className="search-bar" onSearch={handleSearch} />
      {query && <p>Showing results for: <strong>{query}</strong></p>}
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onAddFavorite={handleAddFavorite} />
        ))}
      </div>
      {showPopup && <div className="popup-notification">{popupMessage}</div>}
    </div>
  );  
};

export default HomePage;
