
import React,{ createContext, useState ,useEffect} from 'react'
import * as BooksAPI from '../BooksAPI'
const BookContext = createContext()

export default BookContext;


export const AuthProvider = ({children}) => {
        
    const [books, setBooks] = useState([])
    const [status, setstatus] = useState(false)
    useEffect(() => {
        BooksAPI.getAll()
        .then(data => {
            setBooks(data)
            setstatus(true)
          }
          );
          
      }, []);
       
      
      let updateShelf = (bookId, shelf)=> {
        BooksAPI.update(bookId, shelf).then(()=> {
            BooksAPI.getAll()
             .then(data => {
                setBooks(data)
                setstatus(true)
              }
              )}).catch((error) => {
            
            return(<h2>Error in update:{error}</h2>)
      })
      
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