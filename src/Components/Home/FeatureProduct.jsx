import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
import { Link } from 'react-router'
import ProductCard from '../../ui/ProductCard'

const FeatureProduct= () => {
  return (
    <section className='py-8'>
       <div className="container">
        <div className='flex justify-between'>
           <h2 className='text-lg md:text-[26px] font-medium'>Featured Product</h2>

           <Link className='text-secondary text-base flex items-center  gap-4'>View more <IoArrowForward className='text-xl'/></Link>
        </div>

         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 mt-5'>
            <ProductCard img="/image (2).png " text="Headrest Executive Mesh Office Chair set" price="৳10500">

            </ProductCard>
            <ProductCard img="/Image Placeholder (3).png" text="Women fashion dress set" price="৳1000">

            </ProductCard>
            
            <ProductCard img="/Image Placeholder (4).png"  text="Headrest Executive Mesh Office Chair set"price="৳500">

            </ProductCard>
            
            <ProductCard img="/Image Placeholder (5).png" text="Headrest Executive Mesh Office Chair set"price="৳1000.00">

            </ProductCard>
            
            <ProductCard img="/Image Placeholder (6).png" text="Headrest Executive Mesh Office Chair set"price="৳10500"> 

            </ProductCard>
            
            <ProductCard img="/image (3).png" text="Women fashion dress set"price="৳1000">

            </ProductCard>
            
            <ProductCard img="/image (4).png" text="Headrest Executive Mesh Office Chair set"price="৳5000">

            </ProductCard>
            <ProductCard img="/image (5).png" text="Women black dress and red hat collections"price="৳1000.00">

            </ProductCard>
            <ProductCard img="/image (6).png" text="Headrest Executive Mesh Office Chair set"price="৳10500">

            </ProductCard>
            <ProductCard img="/image (7).png" text="Women fashion dress set"price="৳1000">

            </ProductCard>
            <ProductCard img="/image (8).png" text="Headrest Executive Mesh Office Chair set"price="৳5000">

            </ProductCard>
            <ProductCard img="/image (9).png" text="Women black dress and red hat collections"price="৳1000.00">

            </ProductCard>
            <ProductCard img="/image (2).png" text="Headrest Executive Mesh Office Chair set"price="৳10500">

            </ProductCard>
            <ProductCard img="/image (10).png" text="Women fashion dress set"price="৳1000">

            </ProductCard>
            <ProductCard img="/image (11).png" text="Headrest Executive Mesh Office Chair set"price="৳5000">

            </ProductCard>
            <ProductCard img="/image (12).png" text="Women black dress and red hat collections"price="৳1000.00"> 

            </ProductCard>
            
            
        </div>
       </div>
    </section>
  )
}

export default FeatureProduct
