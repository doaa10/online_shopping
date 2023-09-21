import React from 'react'
import { Nav } from '../Home/nav'
import { Menu } from '../Home/Menu'
import { Footer } from '../Home/Footer'
import './products.css'

export const Checkout = ({count,cart,totalPrice}) => {
  return (
    <>
    <Nav count={count}/>
    <Menu/>
    <div className='checkout'>
      <div className='information'>
        <span>Address</span>
        <input type='text'></input>
        <span>card number</span>
        <input type='text'></input>
        <span>Expire date</span>
        <input type='date'></input>
        <span>cvv</span>
        <input type='text'></input>
        <button className='submit'>Submit</button>
      </div>
      <div className='ordersummary'>
        <h3>Your order</h3>
        {
          cart.map((item)=>{
            return <div className='ordersum'>
              <div className='fri'><img src={item.imageUrl}/>
              <span>{item.detail}</span>
              </div>
              <span>{item.price}</span>
            </div>
          })
        }
        <div className='totalll'>
          <span>Total</span>
          <span>{totalPrice} $</span>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  )
}
