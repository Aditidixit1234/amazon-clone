import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import {Link} from 'react-router-dom'

function Subtotal() {
  
  const [{basket}]=useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat renderText={(value)=>(
            <>
<p>Subtotal ( {basket.length} items):
<strong> {value} </strong></p>
<small className='subtotal_gift'><input type="checkbox" />This order contains a gift</small>
             </>
)}
decimalScale={2}
value={getBasketTotal(basket)}
displayType={"text"}
thousandSeparator={true}
/>  
<Link to='/payment'>
<button className='btn'>Proceed to checkout</button>
</Link>




    </div>
  )
}

export default Subtotal
