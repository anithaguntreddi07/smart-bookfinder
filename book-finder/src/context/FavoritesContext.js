import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (book) => {
    if (!favorites.some((fav) => fav.id === book.id)) {
      setFavorites((prev) => [...prev, book]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((book) => book.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
