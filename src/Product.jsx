import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';


function Product({title,image,price}) {
  const [{basket},dispatch]=useStateValue();
  console.log(basket);
const addToBasket=()=>{
dispatch({
  type:"ADD_TO_BASKET",
  item:{
    title:title,
    image:image,
    price:price,
  },


});
};
  return (
    <div className='product'>
        <div className="product_information">
            <p>{title}</p>
            <p className='product_price'>
                <small> Rs </small>
                <strong className='st'> {price} </strong>
            </p> 
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>ADD TO BASKET</button>
      
    </div>
  )
}

export default Product;
