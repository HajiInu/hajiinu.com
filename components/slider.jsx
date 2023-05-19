import Link from "next/link";
import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const Slider = () => {
  const [animated, setAnimated] = useState(false);
  const [animatedimg, setAnimatedimg] = useState(false);

  const onEnterViewport = () => {
    setAnimated(true);
  };

  const onExitViewport = () => {
    setAnimated(false);
  };
  const onEnterimg = () => {
    setAnimatedimg(true);
  };

  const onExitimg = () => {
    setAnimatedimg(false);
  };
  return (
    <div className="w-100 row p-0 m-0 bg_light  pb-4">
      <div className="col-lg-6 order-2 order-lg-1 d-flex justify-content-end p-0 m-0 py-4 py-lg-5">
        <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
          <div
            className={`col-lg-9 col-md-7 col-9 px-1 m-0 scrool_animate ${
              animated && " animate"
            }`}
          >
            <div className="slider_title py-4 pb-5 text-black">
              A Decentralized Meme Token Evolved into a Vibrant Ecosystem
            </div>
            <Link
              className="p-3  px-4  button_home ms-2 ms-sm-0"
              href={"/whitepaper"}
            >
              WHITEPAPER
            </Link>
          </div>
        </ScrollTrigger>
      </div>
      <div className="col-lg-6  order-1 order-lg-2 d-flex justify-content-center p-0 m-0 pe-lg-5">
        <ScrollTrigger onEnter={onEnterimg} onExit={onExitimg}>
          <img
            src="/slider.png"
            className={`slider_image me-lg-5 scrool_animate_img ${
              animatedimg && " animate_img"
            }`}
          />
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default Slider;
