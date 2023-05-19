import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'

const Tokenomic = () => {
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
    <div id='token' className='w-100 bg_dark p-0 m-0 row justify-content-center align-items-center py-3'>
          <div className='col-lg-10 p-0 m-0 p-3 row justify-content-center align-items-center'>
            <div className='w-100 text-center slider_title pb-4'>
                Tokenomic
            </div>
            <div className='col-lg-6 col-sm-10 p-1 pm-md-4 mb-5 mb-md-0'>
            <ScrollTrigger onEnter={onEnterimg} onExit={onExitimg}>
                 <img  src="/tokenomic.png" className={`w-100 px-3 px-md-5 scrool_animate_img ${animatedimg && " animate_img"}`}/>
            </ScrollTrigger>
               
            </div>
            <div className='col-lg-6 col-sm-10 col-12  p-md-5 text-white'>
            <ScrollTrigger onEnter={onEnterBox} onExit={onExitBox}>
              <div  className={` box_container_token p-3 ${animatedbox && " animate_center"}`}>
                <div className='w-100 p-4 py-5'>
                    <h2 className='text-center py-3 '>Total Supply <br/><span>200,000,000,000,000,000</span> </h2>
                    <span className='w-100 d-flex py-3'>
                        <span className='col-6 text-center '>
                          Farm : 12%
                        </span>
                        <span className='col-6 text-center'>
                        Liquidity : 75%
                        </span>
                    </span>
                    <span className='w-100 d-flex py-3'>
                        <span className='col-6 text-center'>
                        Team : 8%
                        </span>
                        <span className='col-6 text-center'>
                        Marketing : 5%
                        </span>
                    </span>

                </div>

              </div>
          
            </ScrollTrigger>
            </div>
      </div>
    </div>
  )
}

export default Tokenomic
