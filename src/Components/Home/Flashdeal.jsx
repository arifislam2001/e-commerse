import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
import { Link } from 'react-router'
import ProductCard from '../../ui/ProductCard'

const Flashdeal = () => {
  return (
    <section className='py-8'>
       <div className="container ">
        <div className='flex justify-between'>
           <h2 className='text-lg md:text-[26px] font-medium'>Flash Deals</h2>
              
           <Link className='text-secondary text-base flex items-center  gap-4'>View more <IoArrowForward className='text-xl'/></Link>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 mt-5'>
            <ProductCard showoffer={true} img="/public/product.png" text="Headrest Executive Mesh Office Chair set" price="৳10500">

            </ProductCard>
            <ProductCard showoffer={true} img="/image (7).png  " text="Women fashion dress se "  price="৳1000">
              </ProductCard>
            <ProductCard showoffer={true} img="/image (8).png "  text="Headrest Executive Mesh Office Chair set" price="৳5000">

            </ProductCard>
            <ProductCard showoffer={true} img="/image (5).png " text="Women black dress and red hat collections" price="৳1000.00">

            </ProductCard>
            
        </div>
       </div>
    </section>
  )
}

export default Flashdeal
