import React from 'react'
import {Link} from 'react-router-dom'
import Checkout from '../Checkout'


function Navbar2() {
  return (
    <div>
      <nav>
      <Link to="/checkout"><Checkout/></Link>
      </nav>
    </div>
  )
}

export default Navbar2

  