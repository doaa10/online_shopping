// ProductDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Nav } from '../Home/nav';
import { Menu } from '../Home/Menu';
import './products.css'
import { GrFormPrevious,GrFormNext} from 'react-icons/gr';

import { Link } from 'react-router-dom';
import {AiFillStar ,AiOutlineStar,AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai'
import { Footer } from '../Home/Footer';

export const ProductDetails = ({count,addToCart}) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const imageUrl = searchParams.get('image');
  const detail = searchParams.get('detail');
  const price = searchParams.get('price');

  return (
<>
     <Nav count={count}/>
     <Menu/>
     <div className='headerProducts'>
      <Link  className='iconback' to='/'><GrFormPrevious  size={18} color='#6b6968'/></Link>
      <Link to='/'><span>Home</span></Link>
      <Link to='/women'><span><span className='slash'>/</span>Women</span></Link>


    </div>
    <div className='productDetails'>
    
        <div className='productimage'>  
        <img src={imageUrl} alt='Product Details' />
        <img src={imageUrl} alt='Product Details' />




</div>
<div className='thedetails'>
  <div className='contentdetails'>
    <span>{detail}</span>
    <span>{price} EGY</span>
    </div>
    <div className='reviews'>
      <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiOutlineStar/>
      <span><a className='write'>write a review</a></span>

    </div>
    <div className='sizes'>
      <div>S</div>
      <div>M</div>
      <div>L</div>
      <div>XL</div>

    </div>
    <div className='add'>
    <AiOutlineShoppingCart/>
      <span className='addto' onClick={()=>addToCart(imageUrl,detail,price)}><a>Add to cart</a></span>
    </div>
    <div className='fav'>
      <AiOutlineHeart/>
      <span>Add to Favorites</span>
    </div>
</div>
    </div>
    <Footer/>
    </>
  );
};
