
import React,{ createContext, useState ,useEffect} from 'react'
import * as BooksAPI from '../BooksAPI'
const BookContext = createContext()

export default BookContext;


export const AuthProvider = ({children}) => {
        
    const [books, setBooks] = useState([])
    const [status, setstatus] = useState(false)
    useEffect(() => {
        // console.log("fired")
        BooksAPI.getAll()
        .then(data => {
            setBooks(data)
            setstatus(true)
          }
          );
          
      }, []);
    
      let updateShelf = (bookId, shelf)=> {
         BooksAPI.update(bookId, shelf)
        //  console.log("fired")
         BooksAPI.getAll()
         .then(data => {
            setBooks(data)
            setstatus(true)
          }
          );
      
    }

    let contextData = {
        books:books,
        status:status,
        updateShelf:updateShelf
    }
    return(
        <BookContext.Provider value={contextData}>
            {children}
        </BookContext.Provider>
    )
}