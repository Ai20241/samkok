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
          <img src="https://sgi.uj.com.tw//files/images/img_20240325190346.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sgi.uj.com.tw//files/banner/banner_1705566459.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sgi.uj.com.tw//files/banner/banner_1702018771.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sgi.uj.com.tw//files/banner/banner_1702020245.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sgi.uj.com.tw//files/banner/banner_1695190304.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
