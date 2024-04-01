import React, { useState } from "react";
import './Product.css';
import Data from './Data/Data.js';
import Button from 'react-bootstrap/Button';


const Products = () => {
  const[productItem, setproductItem]=useState(Data)
 const{format} = new Intl.NumberFormat('hi-In',{
    style:'currency',
    currency:'INR',
  })
  const handlefilter = () =>{
  const selectitem = productItem.filter((item)=>{
      return(
        item.price>30
      )
    })
    setproductItem(selectitem);
  }
  return(
    <div>
    <p className="filter" onClick={handlefilter}>Filter by price</p>
      <div className="cart">
    {
      productItem.map((Pr)=>(
        <div className="product" key={Pr.id}>
        <div className="product-image">
        <img src={Pr.thumbnail} alt={Pr.title} />
        </div>
       <div className="product-details">
       <p className="product-title">{Pr.title}</p>
       <p className="product-price">{format(Pr.price)}</p>
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
  );
    };

export default Products;
