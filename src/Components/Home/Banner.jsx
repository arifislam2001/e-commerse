import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';



const Banner = () => {
   const  settings = {
    dots: true,
   
    slidesToShow: 1,
    arrows : false,
    appendDots: dots => (
      <div
       
      >
        <ul className='flex gap-2  absolute bottom-3  left-1/2  -translate-x-1/2' > {dots} </ul>
      </div>
    ),
    customPaging: i => (
     <button className='w-1 md:w-3 h-1 md:h-3 bg-white rounded-full'></button>
    )
    
  };
  return (
    <section>
       <div className="container flex gap-4 md:gap-7">
          <div className='w-[66%]'>
            <Slider {...settings}>
           <Link>
              <img src="/hero_banner.png" alt="" className='w-full'/>
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
          </div >
          <div className='w-[34%] flex  flex-col space-y-4 md:space-y-7'>
              <Link>
                <img src="/hero1.png" alt="" className='w-full'/>
              </Link>
              <Link>
                <img src="/hero2.png" alt="" className='w-full'/>
              </Link>

          </div>
       </div>
    </section>
  )
}

export default Banner
