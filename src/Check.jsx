import React from 'react'
import { useStateValue } from './StateProvider';
function Check({image,title,price}) {
    const [{basket}]=useStateValue();
  console.log(basket);
  return (
    <div className='check'>
<div className='checkoutProduct'>
      <img  className='checkoutProduct_image'src={image} alt="" />
      <div className='checkoutProduct__information'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
          <small>Rs</small>
            <strong>{price}</strong>
        </p>
        <p className='hello'> Ordered</p>
        <p className='hello2'>Delivered by 29 october 2024</p>

        
       
      </div>
    </div>
      
    </div>
  )
}

export default Check
