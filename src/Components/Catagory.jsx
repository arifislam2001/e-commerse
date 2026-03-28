import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Catagory = () => {
    const catagories = [

        {
            title : "Health & Household",
            icon : MdOutlineHealthAndSafety

        },
        {
            title : "Kids Fashion",
            icon : MdOutlineHealthAndSafety
        },
        {
            title : "Toys",
            icon : MdOutlineHealthAndSafety
        },
        {
            title : "Groceries",
            icon : MdOutlineHealthAndSafety
        },
        {
            title : "Home & Lifestyle",
            icon : MdOutlineHealthAndSafety
        },
        {
            title : "Men Fashion",
            icon : MdOutlineHealthAndSafety
        },
        {
            title : "Women’s Fashion",
            icon : MdOutlineHealthAndSafety
        },
        {
            title : "Stationary & Books",
            icon : MdOutlineHealthAndSafety
        },
        {
            title : "Leather Goods",
            icon : MdOutlineHealthAndSafety
        },
        {
            title : "Jewelleries ",
            icon : MdOutlineHealthAndSafety
        },
        {
            title : "Watches ",
            icon : MdOutlineHealthAndSafety
        },
        {
            title : "Jewelleries ",
            icon :MdOutlineHealthAndSafety
        },
        {
            title : "Men Fashion ",
            icon : MdOutlineHealthAndSafety
        },
        {
            title : "Pet Supplies",
            icon : MdOutlineHealthAndSafety
        },
        {
            title : "Seasonal",
            icon : MdOutlineHealthAndSafety
        }
    ]
  return (
    <section>
        <div className="container">
           <h2 className='sub_head'>Category</h2> 

          <div className='mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
              {
            catagories.map((item)=>(
                  
             <Link to="/" className='flex shadow p-4 items-center  rounded-xl '>
               <item.icon className='text-2xl text-brand'/>
              <p className='pl-2 pr-4 '>{item.title}</p>
              <FaChevronRight className='ml-auto ' />

             </Link>
           
            ))
           }
          </div>
        </div>
    </section>
  )
}

export default Catagory
