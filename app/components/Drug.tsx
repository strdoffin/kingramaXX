'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronRight, faChevronLeft  } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";


export default function Drug() {
  const slides = [
    {
      url: '/durgpon.gif',
    },
    {
      url: '/car.gif',
    },
    {
      url: '/buddha.gif',
    },

    {
      url: '/jame.gif',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex:any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=' max-w-[1500px] h-[300px] sm:h-[500px] md:h-[600px] lg:h-[900px] w-full m-auto py-5 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} width={30} height={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} width={30} height={30} />
      </div>
      <div className='flex top-4 justify-center py-2 gap-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <div className="p-2 rounded-full bg-white hover:bg-gray-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
