import React from 'react'
import {Link} from "react-router-dom"
import Header from '../Header'
function Navbar4() {
  return (
    <div>
       <nav>
      <Link to="/login"><Header/></Link>
      </nav>
    </div>
  )
}

export default Navbar4
