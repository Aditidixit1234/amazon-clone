import React from 'react';
import Header from './Header';
import Home from './Home';
import Navbar from './components/Navbar'
import Checkout from './Checkout';
import Payment from './Payment';

import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Login from './Login';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Order from './Order';

const promise=loadStripe('pk_test_51QE2pgC1Zf2ksTlQD8koliwCpJaBiTFewyREzGMz1yKYPA6pIbxvvfaqmdO6iN4ahSpDwgcSTcXgLFLvWlzL161Z00QhGtmoRT');
function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:<><Navbar/><Header/></>
  },
  {
    path:"/",
    element:<><Home/></>
  },
  {
  path:"/checkout",
  element:<><Header/><Checkout/></>
  }, 
  {
  path:"/login",
  element:<><Login/></>
  },
  {
    path:"/payment",
    element:<><Header/>
    <Elements stripe={promise}>
    <Payment/>
    </Elements>
    </>
  },
  {
    path:"/orders",
    element:<><Header/><Order/></>
  },
{
  path:"/beauty",
  element:<><Header/></>
}
])


  return (
  <>
        
       <RouterProvider router={router}/>
            
      
  
    </>
  
  )
}

export default App

