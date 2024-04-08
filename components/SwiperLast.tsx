"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}

        pagination={true}
        modules={[ Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://sgi.uj.com.tw/images/01.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sgi.uj.com.tw/images/02.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sgi.uj.com.tw/images/03.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sgi.uj.com.tw/images/04.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sgi.uj.com.tw/images/05.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sgi.uj.com.tw/images/06.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
