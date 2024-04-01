import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Boot.css";
import Data3 from '../Data/Data3';

const Boot = () => {
  return (
    <div>
      <div className='boot1'>
        {
          Data3.map((prop)=>(
            <div className='boot' key={prop.Price}>
              <div className='boot-img'>
             <img src={prop.img} alt={prop.Title} />
              </div>
              <div className='boot-details'>
             <p className='boot-title'>{<h3> {prop.Title} </h3>}</p>
             <p className='boot-price'>{<h4>{prop.Price}</h4>}</p>
             <p className='boot-text'>{prop.Text}</p>
              </div>
              <div className="lapbtn">
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
export default Boot