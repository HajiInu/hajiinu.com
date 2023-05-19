import Head from 'next/head'
import { Inter } from 'next/font/google'
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
import Header from '@/components/header';
import Slider from '@/components/slider';
import WhyChouseUs from '@/components/whyChouseUs';
import Swap from '@/components/swap';
import Tokenomic from '@/components/tokenomic';
import About from '@/components/about';
import Desc from '@/components/desc';
import Footer from '@/components/footer';
import ContactUs from '@/components/contactUs';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>HAJI INU</title>
        <meta name="description" content="Generated by HAJI INU" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={`${inter.className}`}>
        <Header/>
        <Slider/>

        <h5 style={{background: "#5b0279" ,}} className='address_text m-0 w-100 py-3 text-center'>
            Address :<br/> 0x557e048444f6CCc68D5b5DCce8d3eb4d283c911E
        </h5>
        <Swap/>

      
        <WhyChouseUs/>
        <Tokenomic/>
        <About/>
        <Desc/>
        <ContactUs/>
        <Footer/>
     
      </div>
    </>
  )
}