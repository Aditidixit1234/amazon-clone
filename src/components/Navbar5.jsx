import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
function Navbar5() {
  return (
    <div>
       <nav>
      <Link to="/order"><Header/></Link>
      </nav>
    </div>
  )
}

export default Navbar5
