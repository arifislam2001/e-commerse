import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../ui/Input'
import { IoSearch } from 'react-icons/io5'
import Button from '../ui/Button'
import { FaRegUser } from 'react-icons/fa'
import { GoHeart } from 'react-icons/go'
import { GiShoppingCart } from 'react-icons/gi'


const Navbar = () => {
    const catagories = [
        "Women's Fashion" ,
        "men's Fashion",
        "Kid's Fashion",
        "Home & Lifestyle",
        "Arts & Crafts",
        "Computer & Electronics",
        "Food & Grocery",
    ]
  return (
    <header>
          <nav className='py-8'>
            <div className="container flex justify-between flex-wrap md:flex-nowrap gap-5">
                <Link to="/" className='order-1'>
                   <img src="/nirvoya.png" alt="" />
                </Link>

                <div className='flex bg-[#F1F1F1] h-fit items-center rounded-md w-full md:max-w-md  xl:max-w-3xl  order-3 md:order-2'>
                    <Input placeholder="I'm looking for..." className='border-none'/>
                    <Button variant='primary' className='rounded-l-none text-2xl' >
                        <IoSearch />

                    </Button>
                </div>

                <div className='flex md:gap-10 gap-5  order-2 md:order-3' >
                   <Link to="/login" className='flex items-center gap-1.5'><FaRegUser className='text-xl'/> <span className='hidden md:block'>Login  </span></Link>
                   <Link to="/api" className='flex items-center gap-1.5'><GoHeart className='text-xl' /><span className='hidden md:block'>Wishlist  </span></Link>
                   <Link to="/shop"  className='flex items-center gap-1.5'><GiShoppingCart className='text-2xl' /><span className='hidden md:block'> My Cart</span> <span className='bg-red-500 w-5 h-5 flex items-center rounded-full justify-center text-white'>1</span></Link>
                 
                    

                    
                </div>
            </div>
          </nav>

          <div className='border-b border-b-[#EFEEEE] '>
            <div className="container ">
                <ul className='flex gap-16 justify-start  uppercase px-5 overflow-x-auto flex-nowrap'>
                    {
                        catagories.map((item, ) => (
                            <li>
                                <Link to="/" className='text-base font-medium whitespace-nowrap'>{item}</Link>
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
