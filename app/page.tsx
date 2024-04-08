import Image from "next/image";
import Swiper from  "@/components/Swiper";
import SwiperLast from "@/components/SwiperLast";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="container">
          <div className=" relative">
            <span><img src="https://i.imgur.com/JJJjo4S.png" className=" w-[350px] hidden lg:inline lg:fixed top-10 z-50" /></span>
          </div>

          <div className="content z-0">
            <div className="my-14">
              <img src="https://sgi.uj.com.tw/images/page_title_04_ch.webp" className="mx-auto table w-[40%]" alt="" />
            </div>
          </div>
          <Swiper />
          <div className="my-5">
            <img src="https://sgi.uj.com.tw/images/page_title_02_ch.webp" className="mx-auto table w-[40%]" />
            <div className="my-2 max-w-5xl mx-auto table">
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="w-full">
                  <SwiperLast />
                </div>
                <div className="w-full bg-[#E3E4E7] py-0">
                  <a className="grid grid-cols-4 ">
                    <a href="" className=" table border-b-[1.5px] border-r-[1.5px] border-[#50509B]"><img src="https://sgi.uj.com.tw/images/news/btn_newstype01_ov.png" className="w-[100px] mx-auto" alt="" /></a>
                    <a href="" className=" table border-b-[1.5px] border-r-[1.5px] border-[#50509B]"><img src="https://sgi.uj.com.tw/images/news/btn_newstype01_ov.png" className="w-[100px] mx-auto" alt="" /></a>
                    <a href="" className=" table border-b-[1.5px] border-r-[1.5px] border-[#50509B]"><img src="https://sgi.uj.com.tw/images/news/btn_newstype01_ov.png" className="w-[100px] mx-auto" alt="" /></a>
                    <a href="" className=" table border-b-[1.5px] border-[#50509B]"><img src="https://sgi.uj.com.tw/images/news/btn_newstype01_ov.png" className="w-[100px] mx-auto" alt="" /></a>
                  </a>
                  <div className="content">
                    <div className="flex flex-col">
                      <a href="" className="flex justify-between my-2 mx-2 hover:bg-slate-400">
                        <span className="text-[#50509B] font-bold">อัพเดทหน้าเว็บ</span>
                        <span className="text-[#50509B]">2024/03/26</span>
                      </a>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-5">
            <img src="https://sgi.uj.com.tw/images/page_title_03_ch.webp" className="mx-auto table w-[40%]" alt="" />
          </div>
        </div>
    </main>
  );
}
