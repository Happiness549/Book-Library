import { useState } from 'react'
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import './App.css';

function Books() {
  const [books, setBooks] = useState(() => {
    const storeBooks = localStorage.getItem('myBooks');
    return storeBooks
    ? JSON.parse(storeBooks)
    : [
      {title: "After, author: Anna Tod", pages: 455, read: true}
    ];
  });

  useEffect(() => {
    localStorage.setItem('myBooks', JSON.stringify(books));
  }, [books]);

  const addBooks = (book) => {
    setBooks([...books, { ...book, read:false}]);
  };

  const deleteBook = (indexToDelete) => {
    setBooks(books.filter((_, index) => index !== indexToDelete));
  };

  const toggleReadStatus = (indexToToggle) => {
    const updateBooks = books.map((book, index) => index === indexToToggle ?{ ... book,
      red: !book.read} : book);
      setBooks(updateBooks);
  };

  return(
    <div>
      <h1>My Book Library</h1>
      <BookForm onAddBook={addBook} /> 
      <BookList
      books={books}
      onDelete ={deleteBook}
      onToggleRead={toggleReadStatus} />
    </div>
  );
}

export default Books;
