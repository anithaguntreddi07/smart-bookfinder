import React from 'react';
import '../styles/BookDetail.css';

const BookDetail = ({ book }) => {
  if (!book) return <p>No book selected</p>;

  return (
    <div className="book-detail">
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <h2>{book.volumeInfo.title}</h2>
      <p><strong>Author(s):</strong> {book.volumeInfo.authors?.join(', ')}</p>
      <p><strong>Published:</strong> {book.volumeInfo.publishedDate}</p>
      <p>{book.volumeInfo.description}</p>
    </div>
  );
};

export default BookDetail;
