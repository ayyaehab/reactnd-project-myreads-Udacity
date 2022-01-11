import React,{useContext  } from 'react'
import BookContext from "../context/BookContext";
const Currently = () => {
  let { books ,status, updateShelf } = useContext(BookContext);
    return ( 
        <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {status? books.map(book =>
          {return book.shelf==="currentlyReading"?
          <li key={book.id}>
        <div className="book">
            <div className="book-top">
            {book.imageLinks?<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
              :<div className="book-cover" style={{ width: 128, height: 193 }}></div>}
                <div className="book-shelf-changer">
                    <select defaultValue={book.shelf ? book.shelf : "none"} onChange={(e) => updateShelf(book.id, e.target.value)} >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors?
             <div className="book-authors">{book.authors.join()}</div>
             :null} 
        </div>
        </li>:
        null
        })
    :null}
                      
                      
                    </ol>
                  </div>
                </div>
     );
}
 
export default Currently ;