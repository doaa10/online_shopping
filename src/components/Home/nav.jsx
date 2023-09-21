import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
export const Nav = ({count}) => {

  return (
    
    <div className='nav'>
        <div className='black'>
            <h3>FREE SHIPPING In All Orders</h3>
        </div>

        <div className='bar'>
            <div className='right'>
                
      <div className='search'>
        <input placeholder='what are you looking for ?'></input>
     
                <svg width="50px" height="50px" 
                viewBox="0 0 24 24" fill="none" 
                xmlns="http://www.w3.org/2000/svg">
<path d="M17 17L21 21" stroke="#BABABA"
 stroke-width="2" stroke-linecap="round" 
 stroke-linejoin="round"/>
<path d="M19 11C19 15.4183 15.4183
 19 11 19C6.58172 19 3 15.4183 3 11C3 
 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
  stroke="#BABABA" stroke-width="2"/>
</svg>
      </div>
                <div className='line'></div>
            </div>
            <div className='center'>
                <span>Clovera</span>
            </div>

            <div className='left'>
           <Link to='/cart'> <svg width="30px" height="30px" 
             viewBox="0 0 24 24" fill="none" 
             xmlns="http://www.w3.org/2000/svg">
<path d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 
5 6.88304V9.5C5 12.3284 5 
13.7426 5.87868 14.6213C6.75736 15.5 
8.17157 15.5 11 15.5H19" stroke="#111" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#111" stroke-width="1.5"/>
<path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#111" stroke-width="1.5"/>
<path d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5"
 stroke="#111" stroke-width="1.5"/>
</svg>
</Link>

<div className='counter'>
<span className=''>{count}</span>

</div>



            <svg width="35px" height="35px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4997 18.9911L9.5767 15.9911L6.6767 12.9911C5.10777 11.3331 5.10777 8.73809 6.6767 7.08009C7.44494 6.34175 8.48548 5.95591 9.54937 6.01489C10.6133 6.07387 11.6048 6.57236 12.2867 7.39109L12.4997 7.60009L12.7107 7.38209C13.3926 6.56336 14.3841 6.06487 15.448 6.00589C16.5119 5.94691 17.5525 6.33275 18.3207 7.07109C19.8896 8.72909 19.8896 11.3241 18.3207 12.9821L15.4207 15.9821L12.4997 18.9911Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg fill="#000000" width="25px" height="25px" viewBox="0 0 48 48" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M24,21A10,10,0,1,1,34,11,10,10,0,0,1,24,21ZM24,5a6,6,0,1,0,6,6A6,6,0,0,0,24,5Z"/><path d="M42,47H6a2,2,0,0,1-2-2V39A16,16,0,0,1,20,23h8A16,16,0,0,1,44,39v6A2,2,0,0,1,42,47ZM8,43H40V39A12,12,0,0,0,28,27H20A12,12,0,0,0,8,39Z"/></svg>

            </div>
        </div>

    </div>
  )
}
