import React from 'react'
import "./Header.css";
import pumalogo from "../Assests/puma logo image.jpg";

const Header = () => {
  return (
    <div className='head'>
      <div>
        <img src={pumalogo} alt="pumalogo" style={{width:"60px"}} />
      </div>
      <div className='listitem'>
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Others</li>
          <li>Kids</li>
          <li>Sports</li>
        </ul>
      </div>
      <div className='login'>
        <p>sign up</p>
        <button className='cartbtn'>Add to cart</button>
      </div>
    </div>
  )
}

export default Header;
