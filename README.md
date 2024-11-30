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

### 1. **Home Page - Search Bar Centered**
![Home Page](path/to/screenshot1.png)  
*The search bar is prominently placed in the center of the screen, ready to accept book queries.*

### 2. **Search Results Display**
![Search Results](path/to/screenshot2.png)  
*After searching, the results are displayed as cards containing the book’s title, author, and cover image.*

### 3. **Favorites Page**
![Favorites Page](path/to/screenshot3.png)  
*Users can view their favorite books and remove them if desired.*

### 4. **Dark Mode Feature**
![Dark Mode](path/to/screenshot4.png)  
*Toggle between dark and light modes for a better reading experience.*

### 5. **Mobile Responsive View**
![Mobile View](path/to/screenshot5.png)  
*The app is fully responsive and adapts to smaller screen sizes.*

---

## 📄 How It Works

1. **Search for Books**: Users can type a keyword in the search bar, which triggers a call to the Google Books API to fetch results.
2. **Favorites Management**: Books can be added to the Favorites list, and they are saved for easy access.
3. **Category Filtering**: Users can explore books by selecting predefined categories like 'Fiction' or 'Mystery.'
4. **Dark Mode**: Users can toggle between light and dark themes using the button in the header.

---

## 📂 File Structure

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── SearchBar.jsx
│
├── pages/
│   ├── HomePage.jsx
│   └── FavoritesPage.jsx
│
├── context/
│   └── FavoritesContext.js
│
├── api/
│   └── fetchBooks.js
│
└── styles/
    ├── App.css
    └── SearchBar.css
```

---

## 🖥️ Installation and Setup

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
