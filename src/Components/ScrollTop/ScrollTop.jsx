import React from "react";
import "./ScrollTop.css";

const ScrollTop = () => {
  window.addEventListener("scroll", function () {
    //When scroll is higher than 560 viewport height, add the show_scroll class to a tag with the scroll-top class
    const scrolltop = this.document.querySelector(".scrolltop");
    if (this.scrollY >= 560) scrolltop.classList.add("show_scroll");
    else scrolltop.classList.remove("show_scroll");
  });
  return (
    <a href="#home" className="scrolltop">
      <i className="uil uil-arrow-up scrolltop-icon"></i>
    </a>
  );
};

export default ScrollTop;
