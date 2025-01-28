import React from 'react'
import {Link} from 'react-router-dom'
import Login from '..Login/'
function Navbar3() {
  return (
    <div>
       <nav>
      <Link to="/login"><Login/></Link>
      </nav>
    </div>
  )
}

export default Navbar3
