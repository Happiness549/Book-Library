import Book from './Book';

function BookList({books, ondelete, onToggleRead}) {
    return(
        <div>
            {books.map((book, index) =>(
                <book
                key={index} 
                book={book}
                onDelete={() => onDelete(index)} 
                onToggleRead={()=> onToggleRead(index)}
                />
            ))}
        </div>
    );
}

export default BookList;