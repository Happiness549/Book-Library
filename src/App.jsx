
import React, { useState, useEffect } from 'react';
import BookForm from './components/BookForm.jsx';
import BookList from './components/BookList.jsx';


function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
  };

  return (
    <div className="App">
      <h1>My Book Library</h1>
      <BookForm onAddBook={addBook} />
      <BookList books={books} 
      deleteBook={deleteBook} />
    </div>
  );
}

export default App;
