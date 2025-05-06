import {useState} from 'react';

function BookForm({onAddBook}) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setpages] = useState('');

    const handleSubmit = (e) => {
        e.preventdefault();
        onAddBook({title, author, pages: parseInt(pages) });
        setTitle('');
        setAuthor('');
        setpages('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
            value={title}
            onChange={e=> setTitle(e.target.value)}
            placeholder='Title' required
            />
            <input
            value={author}
            onChange={e => setAuthor(e.target.value)}
            placeholder='Author' required
            />
            <input 
            value={pages}
            onChange={e => setPages(e.target.value)}
            placeholder='pages' 
            type='number' required
            />
            <button type='submit'> Add Books</button>
        </form>
    );
}

export default BookForm;