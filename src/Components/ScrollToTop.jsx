import React, { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0, // vertical position
      left: 0, // horizontal position
      behavior: "smooth", // smooth scroll
    });
  }, [pathname]);
  return null;
};

export default ScrollToTop;
