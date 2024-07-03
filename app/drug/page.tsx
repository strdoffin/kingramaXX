import React from 'react'
import Drug from '../components/Drug'
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronRight, faChevronLeft  } from "@fortawesome/free-solid-svg-icons"
export default function page() {
    const slides = [
        {
          url: '/barbie.gif',
        },
        {
          url: '/buddha.gif',
        },
        {
          url: '/car.gif',
        },
    
        {
          url: '/china.gif',
        },
        {
          url: '/drugal.gif',
        },
        {
          url: '/durgpon.gif',
        },
        {
          url: '/future.gif',
        },
        {
          url: '/home.gif',
        },
        {
          url: '/jame.gif',
        },
        {
          url: '/stonk.gif',
        },
      ];
  return (
    <div className='bg-fuchsia-700'>
        <Link href={"/"} className='w-[50px] h-[50px] flex justify-center items-center text-4xl text-white text-center bg-yellow-400 rounded-full fixed top-5 left-5 z-10'><FontAwesomeIcon icon={faChevronLeft} /></Link>
        <nav className='text-5xl text-center py-2 text-yellow-300 font-bold'>นิทรรศการต้านยาเสพติดออนไลน์</nav>
        <Drug/>
        <div className='grid-cols-2 grid '>
            {slides.map((number , index) => (
              <Link href={'https://www.instagram.com/ssssssmteiei69/'} target='_blank' key={index}>
                <Image key={index} src={number.url} alt="" width={1000} height={500} className='w-full p-3 ' / >
              </Link>
            ))}
        </div>
        <div className='text-white text-center'>Copyright © 2024 ม.6/3 (smte) กลุ่มที่ 2 . All rights reserved.</div>
        
    </div>
  )
}
