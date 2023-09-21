import React, { useEffect, useState } from 'react'
import { Nav } from '../Home/nav'
import { Menu } from '../Home/Menu'
import { Footer } from '../Home/Footer'
import { SingleCartItem } from './SingleCartItem'
import { Link } from 'react-router-dom'

export const Cart = ({cart,clearCart,count,totalPrice}) => {
  

  return (
    <>
    <Nav count={count}/>
    <Menu/>
    <div className='topcart'>
            <div className='carttit'>
            <h1>Cart</h1>

            </div>
            <div className='cartbutton'>
            <button className='clearcart' onClick={clearCart}>Clear Cart list</button>

            </div>
          </div>
    <div className='maincart'>
   
          <div className='single'>
            {    cart.map((item)=>{
              return  <SingleCartItem item={item} cart={cart} />

            })
          }
            </div>
        
          <div className='allprice'>
            <div className='toptit'>Pricing and Shipping fees</div>
            <div className='pricing'>
              <div className='subTotal'>
                <span>subTotal</span>
                <span>{totalPrice}$</span>
              </div>
              <div className='shipping'>
                <span>shipping fees</span>
                <span>15$</span>
              </div>
              <div className='promo'>
                <input type='text' placeholder='apply promocode'></input>
                <button>Apply </button>
              </div>
            </div>
            <div className='total'>
              <span>total</span>
              <span>5800$</span>
            </div>
            <div className='checkoutbtn'>
            <button><Link to='/checkout'>proceed to checkout</Link></button>
          </div>
          </div>
          
</div>
   
        
    
        <Footer/>
    </>
    
  )
}
