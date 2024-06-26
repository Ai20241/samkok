"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
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
