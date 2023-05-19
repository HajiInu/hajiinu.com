import Link from 'next/link'
import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'


const About = () => {
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
    <div id='about' className='w-100 bg_light row p-0 m-0 justify-content-center px-4 text-black py-5'>
        <div className='col-lg-10 col-sm-11 col-12 px-1 row align-items-center'>
            <div className='col-lg-6 p-0 m-0'>
            <ScrollTrigger onEnter={onEnterimg} onExit={onExitimg}>
        <div className={`col-lg-12 col-12 p-0 m-0 py-5 px-3 transition_all_center ${animatedimg && " animate_center"}`}>
                <h4 className=''><b>OUR PROJECT & ECOSYSTEM</b></h4>
                <p className='py-3 pt-4'>HajiInu Swaps Token is the core token that powers the HajiInu Swaps ecosystem.
                Earn HajiInu Swaps Token from Trade Mining, Yield Farms, and HajiInu Pools, buy it on the exchange, then explore its use cases:</p>
                <ul>
                    <li>Stake it in HajiInu Pools to earn free tokens</li>
                    <li>Use it in Yield Farms to earn more  HajiInu</li>
                    <li>Vote in Nest to help projects win growth fund</li>
                </ul>
            </div>
        </ScrollTrigger>
            </div>
     
          <div className='col-lg-6 p-0 m-0'>
          <ScrollTrigger onEnter={onEnterBox} onExit={onExitBox}>
          <div className={`col-lg-12 transition_all col-12 p-0 m-0 py-1 px-4 ${animatedbox && " animate_center"}`}>
                <div className='w-100 p-0 m-0 pb-4 d-flex justify-content-center flex-wrap flex-column align-items-center'>
                <h3 className='text-center pb-4'><b>BUY  ON EXCHANGE </b></h3>
                <Link href="/">
                <img style={{width:"100px"}}  src='/pancake.png' />
                </Link>
                </div>
                <div className='w-100 p-0 m-0 d-flex py-4 justify-content-center flex-wrap flex-column align-items-center'>
                <h3 className='text-center pb-4'><b>MARKET DATA</b></h3>
                <div className='w-100 d-flex justify-content-around'>
                    <Link href="/">
                    <img style={{width:"100px"}}  src='/coinmarketcap.png' />
                    </Link>
                    <Link href="/">
                    <img style={{width:"100px"}}  src='/coingecko.png' />
                    </Link>
                </div>
                
                </div>

            </div>
            </ScrollTrigger>

          </div>
           
        </div>
        
      
    </div>
  )
}

export default About
