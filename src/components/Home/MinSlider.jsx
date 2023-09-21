import React, { useState } from 'react';
import'./home.css';

import { GrFormPrevious,GrFormNext} from 'react-icons/gr';
import { FaRegCircle} from 'react-icons/fa';

export const MinSlider = ({images1,content1,price,source}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [startCont, setStartCont] = useState(0);
  const [startPrice, setStartPrice] = useState(0);

  const [activeSet, setActiveSet] = useState(0); 
  

  const handleNextClick = () => {
    // Calculate the next set of images by incrementing the startIndex
    const nextStartIndex = startIndex + 4;

    const nextStartCont=startCont+4 ;
    const nextStartPrice=startPrice+4;



    setStartIndex(nextStartIndex >= images1.length ? 0 : nextStartIndex);
    
    setStartCont(nextStartCont>=content1.length ? 0 :nextStartCont);
    setStartPrice(nextStartPrice>=price.length ? 0 :nextStartPrice );
  

    const nextActiveSet = activeSet + 1;
    setStartIndex(nextStartIndex >= images1.length ? 0 : nextStartIndex);
    setActiveSet(nextActiveSet >= images1.length / 4 ? 0 : nextActiveSet);

  };

  const handlePrevClick = () => {
    const prevStartIndex = startIndex - 4;
    const prevStartCont=startCont-4 ;
    const prevStartPrice=startPrice-4;
    setStartIndex(prevStartIndex < 0 ? images1.length - 4 : prevStartIndex);
    setStartCont(prevStartCont <0 ? content1.length-4 : prevStartCont);

    const prevActiveSet = activeSet - 1;

    setStartIndex(prevStartIndex < 0 ? images1.length - 4 : prevStartIndex);
    setActiveSet(prevActiveSet < 0 ? images1.length / 4 - 1 : prevActiveSet);

  };
  return (
    <div className={`slid ${source}`}>
      <span className='head'>{source=='trending'? "Trending Now" : "FLASH SALE"}</span>
      <a className='prev' onClick={handlePrevClick}><GrFormPrevious/></a>
      <a className='next' onClick={handleNextClick}><GrFormNext/></a>
       <div className='imgContainer'>
        {
          images1.slice(startIndex, startIndex + 4).map((img)=>{
            return <div className='con'>
              <img className='trendingImg' src={img} alt='trending'></img>
            </div>
          })
        }
      
       </div>
       <div className='imgDesc'>
       {
          content1.slice(startCont,startCont+4).map((txt)=>{
            return <span className='desc'>{txt}</span>
          })
        }
       </div>
       <div className='prices'>
       {
          price.slice(startPrice,startPrice+4).map((price)=>{
            return <span className='price'>{price}</span>
          })
        }
       </div>

       <div className='circles'>
       <span className={`circle ${activeSet === 0 ? 'active' : ''}`} />
        <span className={`circle ${activeSet === 1 ? 'active' : ''}`} />
        

       </div>
     
        
    </div>
  )
}
