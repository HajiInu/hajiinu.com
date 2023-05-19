import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import {FaList, FaTimes} from "react-icons/fa" 

const Header = () => {
  const [show , setShow] = useState(false)
  return (
    <div  style={{position:"relative"}}  className='w-100 p-2 row align-items-center m-0 p-0 bg_light'>
        <div className='col-lg-3 col-8 p-0 m-0 d-flex justify-content-start align-items-center justify-content-lg-center'>
            <Link href={"/"}>
            <span>
                <img src="/logo.png" className='logo_fixed_size p-2'/>
            </span>
            <span className='logo_text'>
              HAJI INU
             </span>
            </Link>
        </div>
        <div className='col-4 d-flex justify-content-end  d-lg-none'>
           <FaList color='#000' onClick={()=>{show ? setShow(false) : setShow(true)}} size={25} />
           {show && (
            <div className={`show_navbar_mobile p-3 text-black  ${show && " animate_navbar"}`}>
            <div className='w-100 d-flex justify-content-end'>
                <FaTimes onClick={()=>{setShow(false)}} size={20} />
            </div>
            <div onClick={()=>setShow(false)} className='w-100 d-flex flex-column pe-5'>
            <Link className="pt-2 pe-4 text-black" href="/">
                <span className='nav_link'>
                    Home
                </span>
            </Link>
            <Link className="pt-2 pe-4 text-black" href="/#swap">
                <span className='nav_link'>
                    Swap
                </span>
            </Link>
            <Link className="pt-2 pe-4 text-black" href="/whitepaper">
                <span className='nav_link'>
                    Whitepaper
                </span>
            </Link>
            <Link className="pt-2 pe-4 text-black" href="/#token">
                <span className='nav_link'>
                    Tokenomics
                </span>
            </Link>
            <Link className="pt-2 pe-4 text-black" href="/#about">
                <span className='nav_link'>
                About
                </span>
            </Link>
           
            </div>
            
           </div>
           )}
        </div>
        <div onClick={()=>setShow(false)} className='d-none d-lg-block col-lg-6 p-0 m-0 '>
            <Link className="px-4" href="/">
                <span className='nav_link'>
                    Home
                </span>
            </Link>
            <Link className="px-4" href="/#swap">
                <span className='nav_link'>
                    Swap
                </span>
            </Link>
            <Link className="px-4" href="/whitepaper">
                <span className='nav_link'>
                    Whitepaper
                </span>
            </Link>
            <Link className="px-4" href="/#token">
                <span className='nav_link'>
                    Tokenomics
                </span>
            </Link>
            <Link className="px-4" href="/#about">
                <span className='nav_link'>
                About
                </span>
            </Link>
         
        </div>
    </div>
  )
}

export default Header
