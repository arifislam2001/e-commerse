import React from 'react'
import { Link } from 'react-router';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";



const Banner = () => {
  const   settings = {
    dots: true,
    slidesToShow: 1,
    arrows :false,
    
      appendDots: dots => (
      <div>
        
      
        <ul className='flex gap-2 absolute bottom-1 md:bottom-1 left-1/2 -translate-1/2'> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div>
       <button className=' w-1 md:w-3 h-1 md:h-3  rounded-full bg-white '></button>
      
    
      </div>
    )

    
  
  
  };
  return (
    <section className='pt-3 pb-12'>
       <div className='container flex gap-4 md:gap-7'>
        <div className='w-[66%]'>
          <Slider {...settings}>
        <Link>
            <img src="/hero_banner.png" alt="" className='w-full' />
        </Link>
        <Link>
            <img src="/hero_banner.png" alt="" className='w-full'/>
        </Link>
        <Link>
            <img src="/hero_banner.png" alt="" className='w-full'/>
        </Link>
        <Link>
            <img src="/hero_banner.png" alt="" className='w-full'/>
        </Link>
    </Slider>
        </div>
        <div className='w-[34%] flex flex-col space-y-4 md:space-y-7'>
          <Link to="/">
            <img src="/hero1.png" alt="hero-1" className='w-full'/>
          </Link>
          <Link to="/">
            <img src="/hero2.png" alt="hero-2" className='w-full' />
          </Link>
        </div>
       </div>
    </section>
  )
}

export default Banner
