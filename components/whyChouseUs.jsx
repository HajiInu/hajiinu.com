import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'

const WhyChouseUs = () => {
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
    <div style={{overflow:"hidden"}} className='w-100 bg_white row justify-content-center p-0 m-0 py-5'>
     <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      <div className={`col-lg-5 col-md-6 col-sm-9 col-11 text-center text_why p-0 m-0 px-3 ${animated && " animate_center"}`}>
      New generation AMM DEX for existing and new projects on Binance Smart Chain (BSC), offering the best trading experience and better project support
      </div>
      <h1 className={`slider_title text-center pt-4 text-black ${animated && " animate_center"}`}>  
         HAJI INU
      </h1>
      </ScrollTrigger>
      <div className='col-lg-10 p-0 m-0 p-3 row justify-content-center'>
            <div className='col-lg-6 col-sm-10 p-4 '>
            <ScrollTrigger onEnter={onEnterimg} onExit={onExitimg}>
                 <img  src="/about.png" className={`w-100 px-3 px-md-5 scrool_animate_img ${animatedimg && " animate_img"}`}/>
            </ScrollTrigger>
               
            </div>
            <div className='col-lg-6 col-sm-10 col-12 px-0 p-md-5 text-white'>
            <ScrollTrigger onEnter={onEnterBox} onExit={onExitBox}>
              <div className={`box_container_parrent p-2 p-md-4 ${animatedbox && " animate_center"}`}>
              <div className={`box_container p-3 p-lg-4 `}>
                <span className='box_title pb-3 d-flex justify-content-start align-items-center'>
                    <img className='me-2' style={{width:"45px"}} src='/logo.png'  />
                   <b> How To Buy</b>
                </span>
                <p className=' text-white '>
                To invest in DeFi, first, get the tokens you need from Binance Smart Chain. You will need BNB (BEP20) to be able to buy. Then you need a wallet with a dapp browser to be able to trade tokens in HajiInu Swaps. Wallets endorsed are Trust Wallet for mobile and Metamask for desktop. Once you have the tokens and the wallet, you can venture safely into the HajiInu Swaps ecosystem.
                </p>
                <p style={{color:"#f40000" , fontWeight:"900"}} className='fs-3 pt-3'>QUICK START GUIDE</p>
                <p style={{color:"orange" , fontWeight:"900"}}>Create MetaMask wallet</p>
                <p>Register on Mata Mask Wallet through app or browser</p>
                <p>Send BNB to your wallet</p>
                <p>Connect your wallet to Pancakeswap Browse your Metamask wallet and connect it with <a href='https://pancakeswap.finance'>Pancakeswap.finance</a> </p>
                </div>

              </div>
          
            </ScrollTrigger>
            </div>
      </div>
      <div className='col-lg-10 p-0 m-0 px-1 px-md-3 py-3 row justify-content-center'>
      <div className='col-lg-6 col-sm-10 col-12 order-2 order-md-1 p-md-5 text-white'>
            <ScrollTrigger onEnter={onEnterBox2} onExit={onExitBox2}>
              <div className={`' w-100 p-3 p-md-4 box_container_parrent2  ${animatedbox2 && " animate_center"} '`}>
              <div className={`box_container2 p-2 p-lg-4 `}>
                <span className='box_title2 pb-3 d-flex justify-content-start align-items-center'>
                    <img className='me-2' style={{width:"45px" , height:"45px"}} src='/logo.png'  />
                    <b>Swap BNB for HAJIINU</b>
                </span>
                <p className=' text-white '>
                Now go to trade and exchange BNB to $HAJIINU
                You will get LP tokens through staking $HAJIINU / BNB tokens in Liquidity Pools. Stake $HAJIINU/ BNB pair to earn tokens in Pancake Swap
                </p>
                </div>
              </div>
               
            </ScrollTrigger>
            </div>
            <div className='col-lg-6  order-1 order-md-2 col-sm-10 p-4 '>
            <ScrollTrigger onEnter={onEnterimg2} onExit={onExitimg2}>
                 <img  src="/about2.png" className={`w-100 px-3 px-md-5 scrool_animate_img ${animatedimg2 && " animate_img"}`}/>
            </ScrollTrigger>
            </div>
      </div>
    </div>

  )
}

export default WhyChouseUs
