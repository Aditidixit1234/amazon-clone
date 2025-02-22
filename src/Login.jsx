import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

function Login() {
  



  return (
    <div className='login'>
        <Link to="/">
        <img  className='login_logo'src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </Link>
<div className="login_container">
    <h1>Sign-in</h1>
    <form>
    <h5>E-mail</h5>
    <input type="text" />
    <h5>Password</h5>
    <input type="password"  />
    <Link to="/">
    <button type='submit' className='create'>SIGN IN</button>
    </Link>
    

    </form>
    <p>
        By signing in ypu agree to Amazon Conditions of Use & Sale.
       <p>Please see our Privacy Notice, and Our interset-based -performance</p> 
    </p>
    <button className='register'>CREATE YOUR ACCOUNT</button>
</div>
        
      
    </div>
  )
}

export default Login
