import React, { useEffect, useState } from 'react'
import { clothes ,FetchDate, options} from '../../data/FetchData';
import { Nav } from '../Home/nav';
import { Menu } from '../Home/Menu';
import { SideBar } from './SideBar';
import { SingleCard } from './SingleCard';
import { GrFormPrevious,GrFormNext} from 'react-icons/gr';

import { Link } from 'react-router-dom';


export const Products =  ({imgs,count,details,prices}) => {






  return (

    <div className="page">
    <div className="top">
      <Nav count={count}/>
      <Menu />
    </div>
    <div className='headerProducts'>
      <Link  className='iconback' to='/'><GrFormPrevious  size={18} color='#6b6968'/></Link>
      <Link to='/'><span>Home</span></Link>
      <Link to='/women'><span><span className='slash'>/</span>Women</span></Link>


    </div>
    <div className='catetitle'>
      <span>Women</span>
    </div>
    <div className="content">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="main-content">
        {
          imgs.map((img ,index)=>{
              return  <SingleCard key={index} image={img}  detail={details[index]} 
              price={prices[index]} />

          })
        }

      </div>
    </div>
  </div>
  
  )
}
