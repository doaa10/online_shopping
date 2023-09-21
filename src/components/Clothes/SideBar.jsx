import React, { useState } from 'react';
import './products.css';
import { UilAngleDown, UilAngleUp } from '@iconscout/react-unicons';

export const SideBar = () => {
  const data = [
    {
      title: 'Size',
      textList: ['Select all', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    },
    {
      title: 'Type',
      textList: ['Select all', 'Blazer jacket', 'Jeans', 'Tops', 'Sport', 'dress', 'bags', 'shoes'],
    },
    {
      title: 'Color',
      textList: ['white', 'black', 'blue', 'Pink', 'Green'],
    },
  ];

  const [sectionStates, setSectionStates] = useState(data.map(() => true));

  const toggleBox = (index) => {
    const newSectionStates = [...sectionStates];
    newSectionStates[index] = !newSectionStates[index];
    setSectionStates(newSectionStates);
  };

  return (
    <div className='sidebar'>
      <div className='sidebarcontainer'>
        {data.map((item, index) => {
          return (
            <div key={index} className='sidesection'>
              <div className='secTitle'>
                <span>{item.title}</span>
                {sectionStates[index] ? (
                  <UilAngleUp onClick={() => toggleBox(index)} />
                ) : (
                  <UilAngleDown onClick={() => toggleBox(index)} />
                )}
              </div>
              {sectionStates[index] && (
                <div className='itemlist'>
                  {item.textList.map((text, textIndex) => {
                    return (
                      <div className='textlist' key={textIndex}>
                        <input className='check' type='radio' />
                        <span>{text}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
