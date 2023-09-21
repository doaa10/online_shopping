import React, { useEffect, useState } from 'react'
import './products.css'
import {AiFillDelete,AiFillStar,AiOutlineStar,AiFillMinusSquare} from'react-icons/ai'
import {BsFillPlusSquareFill} from 'react-icons/bs';
import { Cart } from './Cart';
import { price } from '../Home/trending';
export const SingleCartItem = ({item,cart}) => {
    const [cartcounter,setcartcounter]=useState(1);

  const handleplusvalue=()=>{
    setcartcounter(cartcounter+1);
  }
  const handleminusvalue=()=>{
    setcartcounter((count)=>
      count<=0 ? 0 : count-1
    );
  }


  return (
    <div className='cartpage'>
          

          <div className='cartcontent'>
            <div className='navcart'>
              <span className='iteminfo'>{item.detail}</span>
              <span><AiFillDelete color={'#6b6968'}/></span>
            </div>
            <div className='cartitem'>
                        <div className='leftcart'>
                    <div className='itemimage'>
                    <img src={item.imageUrl}/>
                    </div>
                    <div className='itemdetails'>
                      <span>{item.detail}</span>
                  <div className='starts'>    
                <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiOutlineStar/>
            </div>
                      <span>only 6 on stock</span>
                    </div>
                  </div>

        
    <div className='rightcart'>
        <div className='priceitem'>
          <span>{item.price*cartcounter} EGY</span>
        </div>
        <div className='counteritem'>
          <BsFillPlusSquareFill size={20} onClick={handleplusvalue}/>
          <span>{cartcounter}</span>
          <AiFillMinusSquare size={25} onClick={handleminusvalue}/>
        </div>
      </div>
            </div>

 
          </div>
        
      </div>
  )
}
