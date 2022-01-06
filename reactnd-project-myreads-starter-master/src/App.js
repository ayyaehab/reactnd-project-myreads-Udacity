import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Search from './pages/Search'

class BooksApp extends React.Component {
  

  render() {
    return (
      
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/search" element={<Search />} />
       </Routes>
      
    )
  }
}

export default BooksApp
