// src/components/Slider.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ] 
  
  
  // Adjust this value to change the autoplay speed in milliseconds
};

const Portfolio = ({images}) => {
  return (
    <div className="w-full overflow-x-hidden pb-10">
            <h3 className='font-MontserratAlternates flex w-full  justify-center mb-4'>Our Concern Portfolio</h3>

      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-[full] border-none outline-none px-1" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;
