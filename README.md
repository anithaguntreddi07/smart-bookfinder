### Book Finder Application

The **Book Finder Application** is a React-based web app that allows users to search for books using the **Google Books API**. Users can explore different genres, view detailed book information, and add books to a favorites list for easy reference.

## Live Demo  
[Click here to view the live demo](https://smart-bookfinder.netlify.app) 

---

## Features

- **Dynamic Search**: Search for books by title, author, or keyword.
- **Category Filtering**: Explore books by genres like Fiction, Mystery, Sci-Fi, and more.
- **Favorites Management**: Add or remove books from the favorites list.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Dark Mode Toggle**: Switch between light and dark themes.

---

##  Tech Stack

- **React**: Frontend framework
- **Google Books API**: Book data fetching
- **CSS**: Custom styling for the UI
- **React Router**: For navigation between pages
- **Axios**: For making API requests

---

## Screenshots

all the screenshots of the app can be senn in screenshots folder 

---

## 📄 How It Works

1. **Search for Books**: Users can type a keyword in the search bar, which triggers a call to the Google Books API to fetch results.
2. **Favorites Management**: Books can be added to the Favorites list, and they are saved for easy access.
3. **Category Filtering**: Users can explore books by selecting predefined categories like 'Fiction' or 'Mystery.'
4. **Dark Mode**: Users can toggle between light and dark themes using the button in the header.

---

## File Structure

```
Book-Finder/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── BookCard.jsx
│   │   ├── BookDetail.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Pagination.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── context/
│   │   └── FavoritesContext.js
│   │
│   ├── hooks/
│   │   └── useFetchBooks.js
│   │
│   ├── pages/
│   │   ├── favoritesPage.jsx
│   │   └── HomePage.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── styles/
│   │   ├── App.css
│   │   ├── BookCard.css
│   │   ├── BookDetail.css
│   │   ├── favoritesPage.css
│   │   ├── Footer.css
│   │   ├── Header.css
│   │   ├── HomePage.css
│   │   ├── Pagination.css
│   │   ├── SearchBar.css
│   │   └── ThemeToggle.css
│   │
│   ├── App.js
│   └── index.js
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

---

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/book-finder-app.git
   ```

2. Navigate to the project folder:
   ```bash
   cd book-finder-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

---

### thank you
