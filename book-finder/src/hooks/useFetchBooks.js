import { useState } from 'react';
import { fetchBooks as fetchBooksFromApi } from '../services/api.js';

const useFetchBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooks = async (query, startIndex = 0) => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchBooksFromApi(query, startIndex);
      setBooks(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { books, loading, error, fetchBooks };
};

export default useFetchBooks;
