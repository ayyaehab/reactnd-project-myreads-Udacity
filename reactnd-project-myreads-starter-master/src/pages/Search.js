import React,{useState,useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookContext from "../context/BookContext";
const Search = () => {
    let {updateShelf } = useContext(BookContext);
    const [query, setQuery] = useState("");
    const [books, setSearch] = useState([])
    // const [status2, setstatus] = useState()
    const navigate = useNavigate()
    function handleClick() {
        navigate('/')
      }
    useEffect(() => {

        let isActive = true;
        if (query) {
            BooksAPI.search(query).then(data => {
                if (data.error) {
                    setSearch([])
                } else {
                    if (isActive) {
                        setSearch(data);
                    }
                }
            })
        }

        return () => {
            isActive = false;
            setSearch([])
        }

    }, [query])
    
    return (
        <div className="app">

<div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={handleClick}>Close</button>
              <div className="search-books-input-wrapper" >
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
    
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"  onChange={(e) => setQuery(e.target.value)} />
            
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {books? books.map(book => 
          <li key={book.id}>
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
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
            <div className="book-authors">{book.publisher}</div>
        </div>
        </li>)
    :<div></div>}
              </ol>
            </div>
          </div>
        
        </div>
      );
}
 
export default Search;