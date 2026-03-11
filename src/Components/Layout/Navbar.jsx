import React from 'react'
import { Link, Links } from 'react-router'
import Input from '../ui/input'
import { IoSearch } from 'react-icons/io5'
import Button from '../ui/Button'
import { FaRegUser } from 'react-icons/fa'
import { HiOutlineHeart } from 'react-icons/hi'
import { GiShoppingCart } from 'react-icons/gi'

const Navbar = () => {
   const catagories =[
  "  Women's Fashion",
  " men's Fashion ",
  "Kid's Fashion",
  "Home & Lifestyle",
  "Arts & Crafts",
  "Computer & Electronics",
  "Food & Grocery",
   ]
  return (
   <header>
      <nav className='py-8'>
          <div className='container flex justify-between '>
             <Link to="/">
             <img src="/logo.png" alt="logo" />
             </Link>
             <div className='flex bg-[#F1F1F1] items-center h-fit rounded-md w-full max-w-3xl '>
              <Input placeholder="I'm looking for..." className='border-none'/>
              <Button className='rounded-l-none  px-6 ' >
                <IoSearch className='text-xl' />


              </Button>
             </div>
             <div className='flex gap-9'>
             <Link to="/login " className='flex items-center text-base font-normal text-primary gap-1.5'>
              <FaRegUser/>Login

             </Link>
             <Link to="/login " className='flex items-center text-base font-normal text-primary gap-1.5'>
              <HiOutlineHeart className='text-xl'/>Wishlist

             </Link>
             <Link to="/login " className='flex items-center text-base font-normal text-primary gap-1.5'>
              <GiShoppingCart />My cart <span className='bg-red-500 rounded-full w-5 h-5  text-white flex items-center justify-center text-sm'>1</span>


             </Link>
             </div>
          </div>
      </nav>
      <div className='container '>
          <ul className='flex gap-16 '>
            {
              catagories.map((item)=>(

          <li key={item}>
                 <Link to="/" className='text-base font-medium text-primary uppercase '>{item}</Link>
              

            
            </li>
              ))
            }
          
          </ul>
      </div>
   </header>
  )
}

export default Navbar


