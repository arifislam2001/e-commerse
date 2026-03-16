import React from 'react'
import { Link } from 'react-router'
import Input from '../ui/input'
import Button from '../ui/Button'
import { IoMdSearch } from 'react-icons/io'
import { FaRegUser } from 'react-icons/fa'
import { SlHeart } from 'react-icons/sl'
import { GiShoppingCart } from 'react-icons/gi'

const Navbar = () => {
  const catagories = [
      "  Women's Fashion",
      "men's Fashion",
      "Kid's Fashion",
      "Home & Lifestyle",
      "Arts & Crafts",
      "Computer & Electronics",
      "Food & Grocery"

  ]
  return (
    <header >
         <nav className='py-8'>
              <div className="container flex justify-between flex-wrap md:flex-nowrap gap-6">
                  <Link to="/" className='order-1 '>
                    <img src="/nirvoya.png" alt="Logo" />
                  </Link>

                  <div className='flex bg-[#F1F1F1] items-center h-fit rounded-md w-full max-w-3xl order-3 md:order-2 '>
                       <Input placeholder="I'm looking for..."/>
                       <Button variant='primary' className='rounded-l-none py-2 '>
                        <IoMdSearch  className='text-2xl '/>

                       </Button>
                  </div>
                      
                  <div
                   className='flex gap-5 md:gap-8 order-2 md:order-3 '>
                    <Link to="/login" className='flex items-center gap-1.5'  >   <FaRegUser className='text-xl'/><span className='hidden md:block'>Login</span></Link>
                     
                      
                    <Link to="/login" className='flex items-center gap-1.5'>   <SlHeart className='text-xl'/> <span className='hidden md:block'>ishlist</span></Link>

                    <Link to="/login" className='flex items-center gap-1.5'>   <GiShoppingCart className='text-2xl'/><span className='hidden md:block'>My cart</span> <span className='bg-red-500 w-5 h-5 rounded-full  flex items-center justify-center text-white'>1</span></Link>
                       
                      

                    
                  </div>
              </div>
         </nav>

         <div className='w-full pb-2.5 border-b border-b-[#EFEEEE]'>
           <div className='container  ' >
             <ul className='flex justify-center gap-14 overflow-x-auto'>
                 {
                  catagories.map((item)=>(
                    <li key={item}>
                    <Link to="/" className='text-base text-primary uppercase text-nowrap'>{item}</Link>
                   </li>
                  ))
                 }
             </ul>
         </div>
         </div>
    </header> 
  )
}

export default Navbar
