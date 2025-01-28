import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import Home from '../Home'


function Navbar() {
  return (
    <div>
      <nav>
      <Link to="/"><Header/><Home/></Link>
      </nav>
      
    </div>
  )
}

export default Navbar
