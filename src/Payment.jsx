import React, { useEffect, useState } from 'react'
import "./Payment.css"
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from './reducer';
import axios from './axios';


function Payment() {
    const [{basket}]=useStateValue();
  
    const stripe=useStripe();
    const elements=useElements();
const [succeeded,setSucceeded]=useState(false);
const[processing,setProcessing]=useState("");


const [error,setError]=useState(null);
const [disabled,setDisabled]=useState(true);
const [clientSecret,setClientSecret]=useState(true);
useEffect(()=>{
const getClientSecret = async ()=>{
const response =await axios({
method:'post',
url:`/payment/create?total=${getBasketTotal(basket) * 100}`

});
setClientSecret(response.data.clientSecret)

}
getClientSecret();

},[basket])


const handleSubmit =async(event)=>{
event.preventDeafault();
setProcessing(true);
const payload=await stripe.confirmCardPayment(clientSecret,{
    payment_method:{
        card:elements.getElement(CardElement)
    }
}).then(({paymentIntent})=>{
setSucceeded(true)
setError(null)
setProcessing(false)
})


}
const handleChange = event=>{
setDisabled(event.empty);
setError(event.error?event.error.messege:"");
}


  return (
    <div className='payment'>
    <div className="payment_container">
        <h1>
            Checkout (<Link to='/checkout'>{basket?.length}items</Link>)
        </h1>
       
    <div className="payment_section">
<div className="payment_title">
    <h3 className='hello4'>Delivery Address</h3>
</div>
<div className="payment_address">
    <p className='hello3'>dixitmanoj10@gmail.com</p>
    <p className='hello3'>5-a ram puram kursi road </p>
    <p className='hello3'>Luckonow</p>
</div>
    </div>
    <div className="payment_section">
    <div className="payment_title">
<h3>Review items and delivery</h3>
</div>
<div className="payment_items">
{basket.map(item =>(
        <CheckoutProduct 
        key={item.id}
          title={item.title}
        image={item.image}
        price={item.price}

        />
      ))}

</div>

    </div>
    <div className="payment_section">
        <div className="payment_title">
            <h3>Payment Method</h3>
        </div>
        <div className="payment_details">
            <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}/>
<div className="payment_priceContainer">
<CurrencyFormat renderText={(value)=>(
            <>
<h3>Order Total:{value}</h3>
             </>
)}
decimalScale={2}
value={getBasketTotal(basket)}
displayType={"text"}
thousandSeparator={true}
/>  
<Link to='/orders'>
<button disabled={processing||disabled||succeeded}>
<span>{processing ? <p>Processing</p>:
"Buy Now"}
</span>
</button>
</Link>

</div>
{error && <div>{error}</div>}


            </form>

        </div>


    </div>
    </div>
    </div>
  )
}

export default Payment
