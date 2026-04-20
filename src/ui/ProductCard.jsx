
import React from 'react'
import { BiCart } from 'react-icons/bi'
import { MdOutlineStar } from 'react-icons/md'
import { Link } from 'react-router'

const ProductCard = ({img, text , price,showoffer , data}) => {
  return (
    <Link to="/shop/gygu" className='mt-7 p-2.5 border border-[#E9E9E9] rounded-2xl flex flex-col justify-between bg-white'>
    
   
       <div className=' rounded-2xl  overflow-hidden relative'>
          <img src={img || data?.thumbnail} alt="" className='w-full'/>
        {showoffer &&   <p className='absolute top-0 left-0 bg-badge py-1 px-4 l rounded font-semibold text-white text-xs md:text-base'>-25% OFF</p> }
       </div>
       <div className='flex gap-1.5 mt-4 '>
          <MdOutlineStar className='text-yellow-400 text-xl'/>
          <MdOutlineStar className='text-yellow-400 text-xl'/>
          <MdOutlineStar className='text-yellow-400 text-xl'/>
          <MdOutlineStar className='text-yellow-400 text-xl'/>


          
          <MdOutlineStar className='text-gray-400 text-xl'/>

       </div>

       <h4 className='text-xs md:text-xl  font-normal py-4'>
         {text}
       </h4>

       <div className='flex justify-between '>
          <p className='text-sm md:text-2xl text-brand'>{price}</p>
         <button>
             {/* <BiCart className='text-lg md:text-2xl text-brand'/> */}
             <img src='/basket.svg'/>
         </button>

       </div>

    </Link>
  )
}

export default ProductCard
