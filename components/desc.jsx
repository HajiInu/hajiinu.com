import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const Desc = () => {
  const [animated, setAnimated] = useState(false);
  const [animatedimg, setAnimatedimg] = useState(false);
  const [animatedbox, setAnimatedbox] = useState(false);
  const [animatedimg2, setAnimatedimg2] = useState(false);
  const [animatedbox2, setAnimatedbox2] = useState(false);

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
  const onEnterBox = () => {
    setAnimatedbox(true);
  };

  const onExitBox = () => {
    setAnimatedbox(false);
  };
  const onEnterimg2 = () => {
    setAnimatedimg2(true);
  };

  const onExitimg2 = () => {
    setAnimatedimg2(false);
  };
  const onEnterBox2 = () => {
    setAnimatedbox2(true);
  };

  const onExitBox2 = () => {
    setAnimatedbox2(false);
  };
  return (
    <div className="w-100 p-0 m-0 row justify-content-center py-5">
      <div className="col-lg-10 p-0 m-0 col-sm-11 col-12 px-2 px-md-4 d-flex flex-wrap  justify-content-center">
        <div className="col-lg-6 col-sm-10 col-12  p-md-5 text-white">
          <ScrollTrigger onEnter={onEnterBox} onExit={onExitBox}>
            <div
              className={` box_container_token p-3 ${
                animatedbox && " animate_center"
              }`}
            >
              <div className="w-100 px-1 py-4">
                <h2 className="text-center py-3 fw-bold ">As a Trader</h2>
                <p className="text-center px-3 pb-5 pt-3">
                  You will find potential HajiInu projects on HajiInu Swaps
                  early and accompany them to grow up to ‘rock stars’ through
                  trading, farming, nesting, etc.
                </p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
        <div className="col-lg-6 col-sm-10 col-12  p-md-5 text-white mt-5 mt-lg-0">
          <ScrollTrigger onEnter={onEnterBox2} onExit={onExitBox2}>
            <div
              className={` box_container_token p-3 ${
                animatedbox && " animate_center"
              }`}
            >
              <div className="w-100 px-1 py-4">
                <h2 className="text-center py-3 fw-bold">As a Project</h2>
                <p className="text-center px-3 pb-5 pt-3">
                  You will find the best support on HajiInu Swaps, including
                  growth fund, arbitrage support, entertaining activities,
                  resource connection, friendly display, etc.
                </p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
};

export default Desc;
