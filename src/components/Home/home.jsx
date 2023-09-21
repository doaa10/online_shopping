import React, { useState } from 'react';
import './home.css';
import { Nav } from './nav';
import { Slider } from './Slider';
import { Menu } from './Menu';
import { Catregories } from './Catregories';
import { MinSlider } from './MinSlider';
import { Summer } from './summer';
import images1 from './trending';
import { content1 } from './trending';
import { price } from './trending';
import { pri, old } from './sale';
import imgs from './sale';
import { Footer } from './Footer';

export const Home = ({count}) => {

  return (
    <div className='home'>
      <Nav  count={count} />
      <Menu />
      <Slider />
      <Catregories />
      <MinSlider images1={images1} price={price} content1={content1} source="trending" />
      <Summer />
      <MinSlider images1={imgs} price={old} content1={pri} source="sale" />
      <Footer />
    </div>
  );
};
