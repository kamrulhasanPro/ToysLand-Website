import React from "react";
import { Link } from "react-router";
import { SwiperSlide } from "swiper/react";

const MySwiper = ({ to, src }) => {
  return (
    
      <Link to={to}>
        <img
          className="image-slider"
          src={src}
        />
      </Link>
    
  );
};

export default MySwiper;
