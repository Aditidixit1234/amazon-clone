import React from 'react'
import { useStateValue } from './StateProvider';
import Check from './Check'
import './Order.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
 
import { getBasketTotal } from './reducer';
import CurrencyFormat from "react-currency-format"

    
function Order() {
    const [{basket}]=useStateValue();
  
  return (
    <div className='order'>

<h1>YOUR ORDERS</h1>
<div className="div">
{basket.map(item =>(
        <Check
        key={item.id}
          title={item.title}
        image={item.image}
        price={item.price}

        />
      ))}
</div>
 
      <div className="total_orders">
      <CurrencyFormat renderText={(value)=>(
            <>
<h3>Payed Amount : {value}</h3>
             </>
)}
decimalScale={2}
value={getBasketTotal(basket)}
displayType={"text"}
thousandSeparator={true}
/>  
      </div>
<div className="div2">
<h2>SEE DETAILS</h2>
<div className="div3">
<ArrowForwardIcon/>
</div>
<div className="pay">
<div className='div4'>
  <h2>Payed by: </h2>
</div>
<div className="div5">
<CreditScoreIcon/>
</div>
</div>




</div>  
</div>
  )
}

export default Order
