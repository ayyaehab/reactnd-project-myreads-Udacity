import React from 'react'
import Currently from '../Components/Currently'
import WantToRead from '../Components/WantToRead'
import MyReads from '../Components/MyReads'

import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  function handleClick() {
    navigate('/search')
  }

  return (
    <div className="app">
     
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Currently />
                <WantToRead />
                <MyReads />
              </div>
            </div>
            <div className="open-search">
              <button onClick={handleClick}>Add a book</button>
            </div>
          </div>
       
      </div>
    );
}
 
export default Home;