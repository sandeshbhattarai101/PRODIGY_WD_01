import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>

      
      </Routes>
    </Router>
      
    </>
  )
}

export default App
