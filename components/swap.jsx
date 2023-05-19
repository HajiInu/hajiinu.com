import React from 'react'
import { useEffect, useState } from 'react';
import { ToastContainer , toast  } from 'react-toastify';
import Web3 from 'web3';
import { useWeb3Modal, Web3Button } from '@web3modal/react';
import { MdSwapVert } from "react-icons/md";
import { bsc } from 'wagmi/chains'
import { AbiRouterContract, AbiToken } from '@/abi/abi';


const Swap = (props) => {
    const {ethereumClient} = props
  const [isapproved, setisapproved] = useState(false);
  const [walletAddress , setWalletAddress] = useState();
  const [price, setPrice] = useState();
  const [pricemigmig, setPricemigmig] = useState();
  const [animated, setAnimated] = useState(false);
  const [animated2, setAnimated2] = useState(false);
  const [migmigeinput, setmigmigeinput] = useState();
  const [animatedimg, setAnimatedimg] = useState(false);
  const [animatedimg2, setAnimatedimg2] = useState(false);
  const [BNBTOAIPEPE , setBNBTOAIPEPE] = useState(true);
  const [BNBinput , setBNBinput] = useState();
  const { setDefaultChain } = useWeb3Modal();
  const web3 = new Web3(Web3.givenProvider);

    const onEnterViewport = () => {
      setAnimated(true);
    };
    const onEnterViewport2 = () => {
      setAnimated2(true);
    };
  
    const onExitViewport = () => {
      setAnimated(false);
    };
    const onExitViewport2 = () => {
      setAnimated(false);
    };
    const onEnterimg = () => {
      setAnimatedimg(true);
    };
    const onEnterimg2 = () => {
      setAnimatedimg2(true);
    };
  
    const onExitimg = () => {
      setAnimatedimg(false);
    };
    const onExitimg2 = () => {
      setAnimatedimg2(false);
    };


    // web3 

  const migmigAddress = '';
  const RouterAddress = '0x10ed43c718714eb63d5aa57b78b54704e256024e';
  const WBNBAddress = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';

  const Aipepecontract = new web3.eth.Contract(AbiToken, migmigAddress);
  const Routercontract = new web3.eth.Contract(
    AbiRouterContract,
    RouterAddress
  );

    useEffect(() => {
      setWalletAddress(ethereumClient?.getAccount()?.address);
      setDefaultChain(bsc);
    }, [ethereumClient?.getAccount()?.address]);
    useEffect(() => {
      const sellAmount = 10 ** 18; // 100 DAI = 10^20 wei
      const sellAmountaipepe = 10 ** 9; // 100 DAI = 10^20 wei
      async function giveInformation() {
        const response = await fetch(
          `https://bsc.api.0x.org/swap/v1/quote?buyToken=${migmigAddress}&sellToken=${WBNBAddress}&sellAmount=${sellAmount}&excludedSources=LiquidityProvider`
        );
        const quote = await response.json();
        setPrice(quote.price);
      }
      async function giveInformationaipepe() {
        const response = await fetch(
          `https://bsc.api.0x.org/swap/v1/quote?buyToken=${WBNBAddress}&sellToken=${migmigAddress}&sellAmount=${sellAmountaipepe}&excludedSources=LiquidityProvider`
        );
        const quote = await response.json();
        setPricemigmig(quote.price);
      }
      giveInformation();
      giveInformationaipepe();
    }, []);
    async function _BNBtoAipepe() {
      // Perform the swap.
      const gasPrice = await web3.eth.getGasPrice();
      const gas = await Routercontract?.methods
        ?.swapExactETHForTokens(
          0,
          [WBNBAddress, migmigAddress],
          walletAddress,
          Math.floor(Date.now() / 1000) + 60 * 10
        )
        .estimateGas({
          from: walletAddress,
          value: (BNBinput * 1000000000000000000).toFixed(),
          gasPrice: gasPrice,
          chainId: 56,
        })
        .then((e) => {
          toast.success(e.message);
        })
        .catch((e) => {
        });
     
      await Routercontract?.methods
        ?.swapExactETHForTokens(
          0,
          [WBNBAddress, migmigAddress],
          walletAddress,
          Math.floor(Date.now() / 1000) + 60 * 10
        )
        .send({
          from: walletAddress,
          gas: gas ? gas : 0,
          value: (BNBinput * 1000000000000000000).toFixed(),
          gasPrice: gasPrice,
          chainId: 56,
        })
        .then((e) => {
          toast.success(e.message);
        })
        .catch((e) => {
          toast.error(e.message);
        });
    }
  
    async function _AipepeToBNB() {
      // Perform the swap.
      const currentAllowance = await Aipepecontract?.methods
        ?.allowance(walletAddress, RouterAddress)
        ?.call();
      if (currentAllowance < migmigeinput * 1000000000) {
        const newAllowance = new web3.utils.BN('2')
          ?.pow(new web3.utils.BN('256'))
          ?.sub(new web3.utils.BN('1'));
        const gasAprrroved = await Aipepecontract.methods
          ?.approve(RouterAddress, newAllowance)
          ?.estimateGas({ from: walletAddress });
        await Aipepecontract.methods
          ?.approve(RouterAddress, newAllowance)
          ?.send({ from: walletAddress, gas: gasAprrroved })
          ?.then((e) => {
            setisapproved(true);
            toast.success('Approved success');
          })
          .catch((e) => {
            toast.error(e.message);
          });
      }
      const gasPrice = await web3?.eth?.getGasPrice();
      const gas = await Routercontract?.methods
        ?.swapExactTokensForETH(
          (migmigeinput * 1000000000).toFixed(),
          0,
          [migmigAddress, WBNBAddress],
          walletAddress,
          Math.floor(Date.now() / 1000) + 60 * 5
        )
        ?.estimateGas({
          from: walletAddress,
        });
      if (isapproved) {
        await Routercontract?.methods
          ?.swapExactTokensForETH(
            (migmigeinput * 1000000000).toFixed(),
            0,
            [migmigAddress, WBNBAddress],
            walletAddress,
            Math.floor(Date.now() / 1000) + 60 * 5
          )
          ?.send({
            from: walletAddress,
            gas: gas,
            gasPrice: gasPrice,
            chainId: 56,
          })
          ?.then((e) => {
            toast.success(e.message);
          })
          ?.catch((e) => {
            toast.error(e.message);
          });
      }
    }
  return (
    <div style={{position:"relative"}} className='w-100 p-0 m-0'>
      <video className='w-100 h-100 p-0 m-0' autoPlay={true} muted={true} loop={true} id="myVideo">
         <source src="/bg_video.mp4" type="video/mp4" />
      </video>
      <div id='swap'  className='w-100 row justify-content-center pb-5 m-0'>
   
      <img style={{width:"380px"}} className='px-5 pt-3 pb-5' src='/welcome.png' />
      
       <h1 className={`slider_title text-center pb-4 `}>  
        Swap Now !
      </h1>
        <div className='p-2 d-flex p-4 pt-3 flex-wrap align-items-center justify-content-start col-lg-4 mb-3 col-md-8 col-sm-9 col-11 bg_link_input'>
                 {/* <h3 className='w-100 text-center'>BUY NOW</h3> */}
                 <div className='w-100 d-flex py-3 pb-4  justify-content-center'>
                 <Web3Button/>
                 </div>
                 {BNBTOAIPEPE ? (
                    <div className='form-group col-md-12 col-12 d-flex  justify-content-start align-items-center'>
                    <span className='icon_Token'>
                        <img  src='/BNB.png'/>
                    </span>
                        <input placeholder='0.00' value={BNBinput} onChange={(e) => setBNBinput(e.target.value)}  className='form-field w-100 ' /> 
                    </div>
                 ) : (
                    <div className='form-group col-md-12 col-12 d-flex  justify-content-start align-items-center'>
                    <span className='icon_Token'>
                        <img  src='/logo.png'/>
                    </span>
                 
                        <input placeholder='0.00' value={migmigeinput} onChange={(e) => setmigmigeinput(e.target.value)} type="number" className=' w-100 form-field' /> 
             
                    </div>
                 )}
                
                
                 <div style={{cursor:"pointer"}} onClick={()=>{walletAddress ? BNBTOAIPEPE ? setBNBTOAIPEPE(false) : setBNBTOAIPEPE(true) : toast.warning("connect to wallet")}} className='col-12 d-flex flex-column justify-content-center align-items-center'>
                  <MdSwapVert color='#fff' size={45}/>
                 </div>
                 {BNBTOAIPEPE ? (
                  <div className='form-group col-md-12 col-12 d-flex  justify-content-start align-items-center'>
                    <span className='icon_Token'>
                        <img  src='/logo.png'/>
                    </span>
                
                       <input placeholder='0.00' value={BNBinput ? (BNBinput * price).toFixed(9) : ""} disabled type="text" className='form-field w-100 ' /> 
            
                 </div>
                 ) : (
                 <div className='form-group col-md-12 col-12 d-flex  justify-content-start align-items-center'>
                    <span className='icon_Token'>
                        <img  src='/BNB.png'/>
                    </span>
                       <input placeholder='0.00' value={migmigeinput ? (migmigeinput * pricemigmig).toFixed(18) : "" } disabled type="text" className='form-field w-100 ' /> 
                 </div>
                 )}
                 <div className='w-100 d-flex justify-content-center'>
                  {BNBTOAIPEPE ? (
                  <button onClick={(e)=>{_BNBtoAipepe()}} className='button_home py-2  px-5 mt-4'>
                    SWAP
                  </button>
                  ) : (
                    <button onClick={(e)=>{_AipepeToBNB()}} className='button_home py-2  px-5 mt-4'>
                     {isapproved ? "SWAP" : "APPROVE"}
                  </button>
                  )}
                 </div>
          </div>
    </div>
    </div>
    
  )
}

export default Swap
