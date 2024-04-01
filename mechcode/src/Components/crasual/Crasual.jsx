import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Crasual.css";
function Crasual() {
  return (
    <Carousel className='vjj'>
    <Carousel.Item>
      <img src="https://images.vexels.com/content/194700/preview/buy-online-slider-template-4261dd.png" alt="Loading first image" style={{height:"80vh", width:"100%"}}/>
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://i.pinimg.com/736x/b6/89/96/b68996b0aeb13339740f961ada455a77.jpg" alt="Loading second image" style={{height:"80vh", width:"100%"}}/>
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://www.essentialplugin.com/wp-content/uploads/2022/02/How-to-Make-Ecommerce-Website-Sliders-That-Work-1.png" alt="Loading third image" style={{height:"80vh", width:"100%"}}/>
    </Carousel.Item>
  </Carousel>
  )
}
export default Crasual