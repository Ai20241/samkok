"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2 relative w-full"
      >
        <SwiperSlide className='bg-none '>
          <div className=' '>
            <div className=' w-[100%] absolute right-16'>
            <img src="https://sgi.uj.com.tw/images/camp_cha_01_01.png" className='bg-none' alt="" />
            </div>
            <div className=' relative'>
            <div className='content-image absolute -right-5 top-32 w-[50%]'>
              <img src="https://sgi.uj.com.tw/images/camp_paper.png" className='' alt="" />
            </div>
            <div className='absolute top-48 right-7 w-[270px] z-'>
              <img src="https://sgi.uj.com.tw/images/pp_info_title_01_ch.png" alt="" />
              <div className='grid grid-cols-4 gap-2'>
              <button className='py-1 text-[14px] text-white px-3 w-full border-[2px] border-gray-900 bg-[#80583D] text-center'>
                ปุ่ม
              </button>
              <button className='py-1 text-[14px] text-white px-3 w-full border-[2px] border-gray-900 bg-[#80583D] text-center'>
                ปุ่ม
              </button>
              <button className='py-1 text-[14px] text-white px-3 w-full border-[2px] border-gray-900 bg-[#80583D] text-center'>
                ปุ่ม
              </button>
              <button className='py-1 text-[14px] text-white px-3 w-full border-[2px] border-gray-900 bg-[#80583D] text-center'>
                ปุ่ม
              </button>
</div>
            </div>
            <span className='absolute w-[150px] z-0 title'><img src="https://sgi.uj.com.tw/images/cha_name03_2.png" alt="" /></span>
<span className=' absolute -left-10 w-[45%]'><img src="https://sgi.uj.com.tw/images/camp_item_01.png" alt="" /></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-none '>
          <div className=' '>
            <div className=' w-[100%] absolute right-16'>
            <img src="https://sgi.uj.com.tw/images/camp_cha_01_03.png" className='bg-none' alt="" />
            </div>
            <div className=' relative'>
            <div className='content-image absolute -right-5 top-32 w-[50%]'>
              <img src="https://sgi.uj.com.tw/images/camp_paper.png" className='' alt="" />
            </div>
            <div className='absolute top-48 right-7 w-[270px] z-'>
              <img src="https://sgi.uj.com.tw/images/pp_info_title_01_ch.png" alt="" />
              <div className='grid grid-cols-4 gap-2'>
              <button className='py-1 text-[14px] text-white px-3 w-full border-[2px] border-gray-900 bg-[#80583D] text-center'>
                ปุ่ม
              </button>
              <button className='py-1 text-[14px] text-white px-3 w-full border-[2px] border-gray-900 bg-[#80583D] text-center'>
                ปุ่ม
              </button>
              <button className='py-1 text-[14px] text-white px-3 w-full border-[2px] border-gray-900 bg-[#80583D] text-center'>
                ปุ่ม
              </button>
              <button className='py-1 text-[14px] text-white px-3 w-full border-[2px] border-gray-900 bg-[#80583D] text-center'>
                ปุ่ม
              </button>
</div>
            </div>
            <span className='absolute w-[150px] z-0 title'><img src="https://sgi.uj.com.tw/images/cha_name01_3.png" alt="" /></span>
<span className=' absolute -left-10 w-[45%]'><img src="https://sgi.uj.com.tw/images/camp_item_02.png" alt="" /></span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='bg-none '>
          <div className=' '>
            <div className=' w-[100%] absolute right-16'>
            <img src="https://sgi.uj.com.tw/images/camp_cha_01_04.png" className='bg-none' alt="" />
            </div>
            <div className=' relative'>
            <div className='content-image absolute -right-5 top-32 w-[50%]'>
              <img src="https://sgi.uj.com.tw/images/camp_paper.png" className='' alt="" />
            </div>
            <div className='absolute top-48 right-7 w-[270px] z-'>
              <img src="https://sgi.uj.com.tw/images/pp_info_title_01_ch.png" alt="" />
              <div className='grid grid-cols-4 gap-2'>
              <button className='py-1 text-[14px] text-white px-3 w-full border-[2px] border-gray-900 bg-[#80583D] text-center'>
                ปุ่ม
              </button>
              <button className='py-1 text-[14px] text-white px-3 w-full border-[2px] border-gray-900 bg-[#80583D] text-center'>
                ปุ่ม
              </button>
              <button className='py-1 text-[14px] text-white px-3 w-full border-[2px] border-gray-900 bg-[#80583D] text-center'>
                ปุ่ม
              </button>
              <button className='py-1 text-[14px] text-white px-3 w-full border-[2px] border-gray-900 bg-[#80583D] text-center'>
                ปุ่ม
              </button>
</div>
            </div>
            <span className='absolute w-[150px] z-0 title'><img src="https://sgi.uj.com.tw/images/cha_name01_4.png" alt="" /></span>
<span className=' absolute -left-10 w-[45%]'><img src="https://sgi.uj.com.tw/images/camp_item_02.png" alt="" /></span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='bg-none '>
          <div className=' '>
            <div className=' w-[100%] absolute right-16'>
            <img src="https://sgi.uj.com.tw/images/camp_cha_01_06.png" className='bg-none' alt="" />
            </div>
            <div className=' relative'>
            <div className='content-image absolute -right-5 top-32 w-[50%]'>
              <img src="https://sgi.uj.com.tw/images/camp_paper.png" className='' alt="" />
            </div>
            <div className='absolute top-48 right-7 w-[270px] z-'>
              <img src="https://sgi.uj.com.tw/images/pp_info_title_01_ch.png" alt="" />
              <div className='grid grid-cols-4 gap-2'>
              <button className='py-1 text-[14px] text-white px-3 w-full border-[2px] border-gray-900 bg-[#80583D] text-center'>
                ปุ่ม
              </button>
              <button className='py-1 text-[14px] text-white px-3 w-full border-[2px] border-gray-900 bg-[#80583D] text-center'>
                ปุ่ม
              </button>
              <button className='py-1 text-[14px] text-white px-3 w-full border-[2px] border-gray-900 bg-[#80583D] text-center'>
                ปุ่ม
              </button>
              <button className='py-1 text-[14px] text-white px-3 w-full border-[2px] border-gray-900 bg-[#80583D] text-center'>
                ปุ่ม
              </button>
</div>
            </div>
            <span className='absolute w-[150px] z-0 title'><img src="https://sgi.uj.com.tw/images/cha_name01_6.png" alt="" /></span>
<span className=' absolute -left-10 w-[45%]'><img src="https://sgi.uj.com.tw/images/camp_item_04.png" alt="" /></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3"
      >
        <SwiperSlide className=' hover:grayscale transition-all duration-200 '>
          <img src="https://sgi.uj.com.tw/images/campcha01_menu_01_ov.png" />
        </SwiperSlide >
        <SwiperSlide className=' hover:grayscale transition-all duration-200 '>
          <img src="https://sgi.uj.com.tw/images/campcha01_menu_03_ov.png" />
        </SwiperSlide>
        <SwiperSlide className=' hover:grayscale transition-all duration-200 '>
          <img src="https://sgi.uj.com.tw/images/campcha01_menu_04_ov.png" />
        </SwiperSlide>
        <SwiperSlide className=' hover:grayscale transition-all duration-200 '>
          <img src="https://sgi.uj.com.tw/images/campcha01_menu_06_ov.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
