import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className="home_container2">
        <div className="home_container">
            <img className='home_image' src="./images/picture.jpg"
            alt=""/>
            <img className='home_image2' src="./images/images.jpeg" alt="" />
            </div>
            <img className='home_image3' src="./images/download.jpeg" alt="" />
            <div className="home_row">
              <Product  title="The lean startup" price={300} image="./images/box1_image.jpg"/>
          
              <Product 
              title="The complete kit" price={500} image="./images/box2_image.jpg"
              
              />
              <Product  title="Furnitures And Furnishigs" price={1500} image="./images/box3_image.jpg"/>
              

            </div>
          
            <div className="home_row">
              <Product  title="Electronics And Gadgets" price={25000} image="./images/box4_image.jpg"/>
             
              
              <Product  title="The Beauty kit" price={1500} image="./images/box5_image.jpg"/>
            
              <Product  title="Toys And Games" price={600} image="./images/box6_image.jpg"/>
              </div>
         
            <div className="home_row">
              <Product  title="Electronics And Gadgets" price={25000} image="./images/box4_image.jpg"/>
             <Product  title="The Beauty kit" price={1500} image="./images/box5_image.jpg"/>
              <Product  title="Toys And Games" price={600} image="./images/box6_image.jpg"/>
              

            </div>
            <div className="home_row">
            <Product  title="Toys And Games" price={500} image="./images/box7_image.jpg"/>
            <Product  title="The clothing style" price={1500} image="./images/box8_image.jpg"/>

            </div>
          
      </div>
      
    </div>
  )
}

export default Home
