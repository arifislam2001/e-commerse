import React, { useEffect, useState } from 'react'
import SelectInput from '../ui/Selectinput'
import ProductCard from '../ui/ProductCard'
import { Link } from 'react-router'
import { useGetProductsQuery } from '../services/api'
import { FaFilter } from 'react-icons/fa'

const Shop = () => {
  const {data , isLoading , error} = useGetProductsQuery()
  const [showFilters, setShowFilters] = useState(false)

 
  
  // const [produclist, setProductList] = useState([])
  // const [Loading, SetLoading] = useState(false);
  // const [error, SetError] = useState("")
  const sortoption = [
    {
      value: "Newest Items",
      label: "Newest Items"
    },
    {
      value: "Oldest Items",
      label: "Oldest Items"
    }
  ]
  const catagories = [

    {
      title: "Men’s fashion",


    },
    {
      title: "Men’s Jacket",

    },
    {
      title: "Men's T-Shirts",

    },
    {
      title: "Casual Shirts",

    },
    {
      title: "Summer T-Shirts",

    }
  ]
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) =>
  //       res.json())
  //     .then((data) => {


  //       setProductList(data.products);
  //       setTimeout(() => {
  //         SetLoading(false);
  //       }, 1000);
  //     }, []).catch((err) => {
  //       SetError(err);

  //     })
  // })
  return (
    <main className='py-12 '>
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14">
        {/* Mobile Filter Toggle */}
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className='lg:hidden flex items-center gap-2 bg-brand text-white px-4 py-2 rounded mb-4'
        >
          <FaFilter /> Filters
        </button>
        
        <div className={`col-span-1 lg:col-span-3 py-6 px-4 lg:px-5 bg-white h-fit sticky top-0 left-0 ${showFilters ? 'block' : 'hidden'} lg:block`}>
          <h3 className='text-base lg:text-lg font-medium text-primary'>Related Categories</h3>
          <div className='space-y-4 lg:space-y-5 mt-4'>

            {
              catagories.map((item) => (

                <Link to="/shop" key={item.title} className='block text-base  text-secondary/90 '>{item.title}</Link>

              ))
            }

          </div>
          <div className='py-6 lg:py-12 my-4 lg:my-6 border-y-2 border-y-secondary/10'>
            <h3 className='text-base lg:text-lg font-medium text-primary'>Filter by Price</h3>
            <input type="Range" className='w-full lg:w-64 my-4 lg:my-7' />
            <p className='text-sm lg:text-base'><span className='text-primary/50'>Price:</span> ৳1000 - ৳2500 </p>
          </div>
        </div>
        <div className='col-span-1 lg:col-span-9'>

          <div className='flex flex-wrap items-center justify-between gap-4 mb-6'>
            <p className=' font-medium text-sm lg:text-lg text-[#424241]/50'>Showing  <span className='text-secondary'>20 </span>of <span className='text-secondary'>160</span> product</p>
            <div className='flex items-center  gap-3 lg:gap-7 ' >
              <p className='whitespace-nowrap text-sm lg:text-base'>Sort By:</p>
              <SelectInput className='' options={sortoption} />



            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>

            {

              isLoading
                ?
                <p>Loaidng Products.....</p>
                :
                data.products.map((item) => (

                  <ProductCard key={item.id} data={item} text={item.title} price={`৳${item.price}`}>
                  </ProductCard>
                ))
            }


            <ProductCard img="/image (5).png " text="Women black dress and red hat collections" price="৳1000.00">

            </ProductCard>
            <ProductCard img="/image (3).png" text="Women fashion dress set" price="৳1000">

            </ProductCard>

            <ProductCard img="/image (7).png  " text="Women fashion dress se " price="৳1000">
            </ProductCard>
            <ProductCard img="/image (8).png " text="Headrest Executive Mesh Office Chair set" price="৳5000">

            </ProductCard>
            <ProductCard img="/image (9).png" text="Women black dress and red hat collections" price="৳1000.00">

            </ProductCard>
            <ProductCard img="/image (4).png" text="Headrest Executive Mesh Office Chair set" price="৳5000">

            </ProductCard>
            <ProductCard img="/image (5).png " text="Women black dress and red hat collections" price="৳1000.00">

            </ProductCard>
            <ProductCard img="/image (3).png" text="Women fashion dress set" price="৳1000">

            </ProductCard>

            <ProductCard img="/image (7).png  " text="Women fashion dress se " price="৳1000">
            </ProductCard>
            <ProductCard img="/image (8).png " text="Headrest Executive Mesh Office Chair set" price="৳5000">

            </ProductCard>
            <ProductCard img="/image (9).png" text="Women black dress and red hat collections" price="৳1000.00">

            </ProductCard>

          </div>
        </div>
      </div>
    </main>
  )
}

export default Shop
