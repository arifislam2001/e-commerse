import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Input from '../ui/Input'
import { IoSearch } from 'react-icons/io5'
import Button from '../ui/Button'
import { FaRegUser } from 'react-icons/fa'
import { GoHeart } from 'react-icons/go'
import { GiShoppingCart } from 'react-icons/gi'
import { useLazySearchProductsQuery } from '../services/api'
import ProductCard from '../ui/ProductCard'


const Navbar = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

const [searchTrigger, { data: searchProducts }] = useLazySearchProductsQuery();

    // debounce search
    useEffect(() => {
        const delay = setTimeout(() => {
            if (search.trim()) {
                searchTrigger(search);
                setShowDropdown(true);
            } else {
                setShowDropdown(false);
            }
        }, 1000);

        return () => clearTimeout(delay);
    }, [search, searchTrigger]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleKeyDown = async (e) => {
        if (e.key === "Enter" && search.trim()) {
            const result = await searchTrigger(search);
            const firstProduct = result?.data?.products?.[0];
            if (firstProduct) {
                setSearch("");
                setShowDropdown(false);
                navigate(`/shop/${firstProduct.id}`);
            }
        }
    };

    return (
        <header>
            <nav className='py-8'>
                <div className="container flex justify-between flex-wrap md:flex-nowrap gap-5">

             
                    <Link to="/" className='order-1'>
                        <img src="/nirvoya.png" alt="logo" />
                    </Link>

                  
                    <div className='relative flex bg-[#F1F1F1] h-fit items-center rounded-md w-full md:max-w-md xl:max-w-3xl order-3 md:order-2'>

                        <Input
                            value={search}
                            onKeyDown={handleKeyDown}
                            onChange={handleSearch}
                            placeholder="I'm looking for..."
                            className='border-none w-full bg-transparent'
                        />

                        
                        <Button
                            variant='primary'
                            className='rounded-l-none text-2xl'
                            onClick={async () => {
                                if (search.trim()) {
                                    const result = await searchTrigger(search);
                                    const firstProduct = result?.data?.products?.[0];
                                    if (firstProduct) {
                                        setSearch("");
                                        setShowDropdown(false);
                                        navigate(`/shop/${firstProduct.id}`);
                                    }
                                }
                            }}
                        >
                            <IoSearch />
                        </Button>

                       
                        {showDropdown && searchProducts?.products?.length > 0 && (
                            <div className="absolute top-full left-0 w-full bg-white shadow-xl z-[9999] max-h-72 overflow-y-auto rounded-md mt-1 border">
                                {searchProducts.products.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => {
                                            setSearch("");
                                            setShowDropdown(false);
                                            navigate(`/shop/${item.id}`);
                                        }}
                                        className="p-3 border-b hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                                    >
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="w-12 h-12 object-cover rounded"
                                        />
                                        <div>
                                            <p className="text-sm font-medium">{item.title}</p>
                                            <p className="text-xs text-red-500 font-semibold">৳{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>

                    {/* RIGHT MENU */}
                    <div className='flex md:gap-10 gap-5 order-2 md:order-3'>

                        <Link to="/login" className='flex gap-1.5 items-center'>
                            <FaRegUser className='text-xl' />
                            <span className='hidden md:block'>Login</span>
                        </Link>

                        <Link to="/api" className='flex items-center gap-1.5'>
                            <GoHeart className='text-xl' />
                            <span className='hidden md:block'>Wishlist</span>
                        </Link>

                        <Link to="/shop" className='flex items-center gap-1.5'>
                            <GiShoppingCart className='text-2xl' />
                            <span className='hidden md:block'>My Cart</span>
                            <span className='bg-red-500 w-5 h-5 flex items-center rounded-full justify-center text-white'>
                                1
                            </span>
                        </Link>

                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Navbar



