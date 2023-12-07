import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar';
import Contact from './components/Contact'
import About from './components/About'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() {

const [myStyle, setMyStyle]= useState({
  color : "black",
  backgroundColor : "white"
})

const handleToggle = ()=>{
  if(myStyle.color == "black" ){
    setMyStyle({color : "white",
    backgroundColor : "black",
 })
  }
  else{
    setMyStyle({color : "black",
    backgroundColor : "white",
})
  }
}


  return (
    <>
    <Router>
      <Navbar handleToggle = {handleToggle}  myStyle={myStyle}/>
      <Routes>
        <Route exact path='/' element={<Home handleToggle = {handleToggle}  myStyle={myStyle} />}/>
        <Route exact path='/contact' element={<Contact handleToggle = {handleToggle}  myStyle={myStyle} />}/>
        <Route exact path='/about' element={<About handleToggle = {handleToggle}  myStyle={myStyle} />}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
