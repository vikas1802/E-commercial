import React from 'react'
import Data2 from "./Data/Data2"
import "./ProdcutData3.css";
import Button from 'react-bootstrap/Button';

const ProdcutData3 = () => {
  return (
   <div>
      <div className="cartdata3">
    {
      Data2.map((Pr3)=>(
        <div className="product" key={Pr3.id}>
        <div className="product-image">
        <img src={Pr3.thumbnail} alt={Pr3.title} />
        </div>
       <div className="product-details3">
       <p className="product-title">{Pr3.title}</p>
       <p className="product-description">{Pr3.description}</p>
       <p className="product-price">{Pr3.price}</p>
       <p className="product-discountPercentage">{Pr3.discountPercentage}</p>
       <p className="product-rating">{Pr3.rating}</p>
       <p className="product-stock">{Pr3.stock}</p>
       <p className="product-brand">{Pr3.brand}</p>
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
  )
}

export default ProdcutData3
