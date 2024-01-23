import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./style.css"

// import required modules
import { Autoplay,Pagination, Navigation } from 'swiper/modules';

export default function Slider({images}) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        {
          images.map((img) => 
            
            <SwiperSlide key={img}>
              <img src={img} className='h-[400px]'/>
            </SwiperSlide>
          )
        }
      </Swiper>
    </>
  );
}
