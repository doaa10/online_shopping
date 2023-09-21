import React from 'react';
import './home.css';

import {  Link } from 'react-router-dom';
import { Home } from './home';
import { Products } from '../Clothes/products';

export const Menu = () => {
  return (
    <div className='menu'>
        <ul>
            <li>             
               <Link to="/">Home</Link>
               </li>
            <li>  
               <Link to="/women">Women</Link>
              </li>
            <li><a>Men</a></li>
            <li><a>Kids</a></li>
            <li><a>Baby</a></li>
        
        </ul>
        
    </div>
    
  )
}
