import React from 'react'
import "./Hero.css";
 import Data1 from './Data/Data1';
 import Button from 'react-bootstrap/Button';



const Hero = () => {
 // const{title, price, trand, img} = props
  return (
     <div>
      <div className='cart1'>
{
 Data1.map((dt)=>(
  <div className="product" key={dt.title}>
  <h1 className="product-title">{dt.trand}</h1>
  <div className="product-image">
  
  <img src={dt.img} alt={dt.title} />
  </div>
 <div className="product-details">
 <p className="product-price">{dt.price}</p>
 </div>
 <div className="btn1">
       <Button variant='primary'>Add to cart</Button>
        <Button variant='danger'>Buy Now</Button>
       </div>
  </div>
))    
}
      </div>
     </div>

    // <div className='hero'>
    // <div style={{border:"2px solid gray", width:"220px", padding:"5px 5px", height:"280px"}}>
    // <h2>{trand}</h2>
    // <div>
    //   <img src={img} alt="shoes" style={{width:"200px",  marginTop:"0px", padding:"10px"}}/>
    //   <div style={{display:"flex", justifyContent:"space-between"}}>
    //     <p>{title}</p>
    //     <p>{price}</p>
    //   </div>

    // </div>
    // </div>
    // </div>
  )
}

export default Hero;
