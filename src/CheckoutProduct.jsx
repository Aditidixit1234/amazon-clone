import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
function CheckoutProduct({image,title,price}) {
  const [{basket},dispatch]=useStateValue();
  console.log(basket);
  const removeFromBasket=()=>{
    dispatch({
      type:'REMOVE_FROM_BASKET',
      price:price,
    })

  }
  return (
    <div className='checkoutProduct'>
      <img  className='checkoutProduct_image'src={image} alt="" />
      <div className='checkoutProduct__information'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
          <small>Rs</small>
            <strong>{price}</strong>
        </p>
        <p className='hello'> This is your item in add to basket</p>
        <p className='hello2'>Proceed with the payment now</p>
        
       
        <button className ="btn"onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
