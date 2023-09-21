import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const SingleCard = ({ image, key,detail,price }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/details?image=${encodeURIComponent(image)}&detail=${encodeURIComponent(detail)}&price=${encodeURIComponent(price)}`);
  };

  return (
    <div className='singlecard' key={key} onClick={handleCardClick}>
      <div className='imagecard'>
        <img src={image} alt={`Product ${key}`} />
      </div>
      <div className='contentcard'>
        <span className='productdesc'>{detail}</span>
        <span className='prodproce'>{price} EGY</span>
        <span className='proddiscount'>
          20% discount <span className='discbold'>{(parseInt(price) * 0.8).toFixed(2)} EGY</span>
        </span>
      </div>
    </div>
  );
};
