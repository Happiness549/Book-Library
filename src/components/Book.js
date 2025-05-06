function Book({book, onDelete, onToggleRead}) {
    return(
        <div style={{
            border: '1px solid #ccc',
            margin: '10px',
            padding: '10px',
            backgroundColor: book.read ? 
            '#e0ffe0': '#ffe0e0'
        }}>
            <h3>{book.title}</h3>
            <p>Pages: {book.pages}</p>
            <p>Status: <strong>{book.read ?
             "Read": "Unread"}</strong></p>
             <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default Book;
