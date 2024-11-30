import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = async (query, startIndex = 0, maxResults = 18) => {
  try {
    const response = await axios.get(`${API_URL}?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`);
    
    // Move search bar up after fetching the books
    const searchBar = document.querySelector('.search-bar');
    searchBar.style.top = '-100px'; // Moves the search bar upwards by 100px (you can adjust the value)
    
    return response.data.items || [];
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
};
