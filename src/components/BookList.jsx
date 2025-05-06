import book from './Book.jsx';

function BookList({ books, deleteBook }) {
    return (
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong> by {book.author} ({book.pages} pages)
            <button onClick={() => deleteBook(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default BookList;
