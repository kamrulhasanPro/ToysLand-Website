import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import MySwiper from "./MySwiper";

const ImageSwiper = () => {
  return (
    <div className="rounded-lg overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
        // className='mySwiper'
      >
        <SwiperSlide>
          <MySwiper
            to={"/"}
            src={"https://i.postimg.cc/XYh24y7Z/Tosy-Common-CBW.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MySwiper
            to={"/"}
            src={
              "https://i.postimg.cc/jSJH63tW/1346546-play-and-learn-toy-cat-web-1.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <MySwiper
            to={"/"}
            src={
              "https://i.postimg.cc/50kyR1mt/0684665-Remote-Control-Toys-Web.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <MySwiper
            to={"/"}
            src={"https://i.postimg.cc/Y25qGdn8/0509624-roker-web.webp"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
