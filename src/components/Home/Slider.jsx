import React, { useState ,useEffect} from 'react';
import './home.css' ;
import { GrFormPrevious,GrFormNext} from 'react-icons/gr'
export const Slider = () => {
    const images = [
        'https://img.freepik.com/free-photo/fashionable-man-woman-sitting-stair_158595-5482.jpg?w=740&t=st=1689112178~exp=1689112778~hmac=c327f34708f060c1483e79f26db8af5c63e7319d519adf9c62716f2314c6f964',
        
        'https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg?w=740&t=st=1689122842~exp=1689123442~hmac=f6f66b265d0f1cd4086afbbc15cf03282bee75d502a0cc0d8c9bd88af7508b89',
        
        'https://img.freepik.com/free-photo/fashion-model-with-beautiful-face-perfect-body-wearing-trendy-dress-holding-brown-leather-hand-bag-full-length_273443-3991.jpg?w=740&t=st=1689113458~exp=1689114058~hmac=77e793cceb505a5222555e025fb588b26d60d74c0b9335dd849166ffb1dd3413',
      ];

      const context=[
        'Unlock Your Fashion Confidence',
        'Express Your Personal Style',
        'Style for Every Occasion'
      ];
    
     
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  useEffect(() => {
    // Function to move to the next slide
    const nextSlide = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    // Set interval to automatically move to the next slide every 3 seconds
    const intervalId = setInterval(nextSlide, 4000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [images]);


  const nextSlider = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlider = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  

  return (
    <div className='slider'>
    <a  className="icon1"onClick={prevSlider}><GrFormPrevious style={{ color: '#fff' }}size={25}/></a>
    <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
    <h2>{context[currentImageIndex]}</h2>
    <a  className="icon2"onClick={nextSlider}><GrFormNext size={25}/></a>
    <div className='shadow'></div>
  </div>

  )
}
