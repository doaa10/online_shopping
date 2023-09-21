import React from 'react';
import './home.css';

export const Catregories = () => {
    const images=[
        'https://img.freepik.com/free-photo/portrait-young-japanese-woman-with-jacket_23-2148870730.jpg?w=740&t=st=1689194629~exp=1689195229~hmac=2b7d26ff36555ce84af069baed8b9dcae0b0d7d39cce324afd4a2a1e903caa09',
        'https://img.freepik.com/free-photo/athletic-woman-by-beach-posing-while-stretching_23-2148781842.jpg?w=740&t=st=1689194910~exp=1689195510~hmac=6304554d4a54173568644fc416f2f5b0d8a98a685ecc0d839cd3b024f1f65f5a',
        'https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17506.jpg?w=360&t=st=1689367117~exp=1689367717~hmac=ae1e84a6e31078223d2d7c60a165dba4c02eca4caffea6e109c682700d99ea36',
        'https://img.freepik.com/free-photo/close-up-portrait-man-shirt-mockup_23-2149260964.jpg?w=360&t=st=1689367145~exp=1689367745~hmac=4d59d592dcf81d4bb29bca802f64bd9355c3fc69a062b6f9805378b6558175a5',
        'https://img.freepik.com/free-photo/still-life-aesthetic-earrings_23-2149649160.jpg?w=360&t=st=1689367173~exp=1689367773~hmac=19199264ce57d9531578881cddf09d5b63c83a89b4c276ec010220d0376b4f8f',
        'https://img.freepik.com/free-photo/front-view-cute-child-boy-white-t-shirt-yellow-jeans-holding-green-skateboard-blue-floor_179666-1008.jpg?w=360&t=st=1689367193~exp=1689367793~hmac=6876612a275ff3328073c3f65a01f241fc4e093d6ddf4c7d4c8d09ceaf545d4e',

    ]

    const text=[
        'Women classic',
        'women sports wear',
        'women dresses',
        'men  T-shirts & hoodies',
        'Women accessories',
        'kids & babys'
    ]
  return (
    <div className='categ'>
        <span className='head-categ'>Categories You Might Like</span>
        <div className='container-categ'>
            {images.map((img)=>{
             return  <div className='singleImg'><img src={img}></img></div>
            })}
        </div>

        <div className='content-categ'>
            {text.map((txt)=>{
                return <span>{txt}</span>
            })}
        </div>
    </div>
  )
}
