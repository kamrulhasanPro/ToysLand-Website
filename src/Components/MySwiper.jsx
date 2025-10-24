import React from "react";
import { Link } from "react-router";
import { SwiperSlide } from "swiper/react";

const MySwiper = ({ to, src }) => {
  return (
    
      <Link to={to}>
        <img
          className="w-full h-36 md:h-72 xl:h-80  object-cover object-center "
          src={src}
        />
      </Link>
    
  );
};

export default MySwiper;
