import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../ui/Input'
import { IoSearch } from 'react-icons/io5'
import Button from '../ui/Button'
import { FaRegUser } from 'react-icons/fa'
import { GoHeart } from 'react-icons/go'
import { GiShoppingCart } from 'react-icons/gi'
import { useLazySearchProductsQuery } from '../services/api'


const menuData = [
    {
        label: "Women's Fashion",
        columns: [
            {
                title: "Clothing",
                items: [
                    { label: "Dresses", slug: "womens-dresses" },
                    { label: "Tops", slug: "tops" },
                    { label: "Bags", slug: "womens-bags" },
                ],
            },
            {
                title: "Shoes & Accessories",
                items: [
                    { label: "Shoes", slug: "womens-shoes" },
                    { label: "Jewellery", slug: "womens-jewellery" },
                    { label: "Watches", slug: "womens-watches" },
                    { label: "Sunglasses", slug: "sunglasses" },
                ],
            },
            {
                title: "Beauty & Care",
                items: [
                    { label: "Beauty", slug: "beauty" },
                    { label: "Skin Care", slug: "skin-care" },
                    { label: "Fragrances", slug: "fragrances" },
                ],
            },
        ],
    },
    {
        label: "Men's Fashion",
        columns: [
            {
                title: "Clothing",
                items: [
                    { label: "Shirts", slug: "mens-shirts" },
                ],
            },
            {
                title: "Shoes & Accessories",
                items: [
                    { label: "Shoes", slug: "mens-shoes" },
                    { label: "Watches", slug: "mens-watches" },
                    { label: "Sunglasses", slug: "sunglasses" },
                ],
            },
        ],
    },
    {
        label: "Kid's Fashion",
        columns: [
            {
                title: "Clothing",
                items: [
                    { label: "Tops", slug: "tops" },
                    { label: "Dresses", slug: "womens-dresses" },
                ],
            },
            {
                title: "Sports & Play",
                items: [
                    { label: "Sports Accessories", slug: "sports-accessories" },
                ],
            },
            {
                title: "Bags & Accessories",
                items: [
                    { label: "Bags", slug: "womens-bags" },
                    { label: "Sunglasses", slug: "sunglasses" },
                ],
            },
        ],
    },
    {
        label: "Electronics",
        columns: [
            {
                title: "Devices",
                items: [
                    { label: "Smartphones", slug: "smartphones" },
                    { label: "Laptops", slug: "laptops" },
                    { label: "Tablets", slug: "tablets" },
                ],
            },
            {
                title: "Accessories",
                items: [
                    { label: "Mobile Accessories", slug: "mobile-accessories" },
                ],
            },
        ],
    },
    {
        label: "Home & Lifestyle",
        columns: [
            {
                title: "Furniture",
                items: [
                    { label: "Furniture", slug: "furniture" },
                    { label: "Home Decoration", slug: "home-decoration" },
                ],
            },
            {
                title: "Kitchen",
                items: [
                    { label: "Kitchen Accessories", slug: "kitchen-accessories" },
                ],
            },
        ],
    },
    {
        label: "Sports & Outdoor",
        columns: [
            {
                title: "Sports",
                items: [
                    { label: "Sports Accessories", slug: "sports-accessories" },
                ],
            },
            {
                title: "Vehicles",
                items: [
                    { label: "Motorcycle", slug: "motorcycle" },
                    { label: "Vehicle", slug: "vehicle" },
                ],
            },
        ],
    },
    {
        label: "Food & Grocery",
        columns: [
            {
                title: "Grocery",
                items: [
                    { label: "Groceries", slug: "groceries" },
                ],
            },
        ],
    },
];


const MegaMenuItem = ({ item, index, total }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, right: 'auto' });
    const ref = useRef(null);
    const isRightAlign = index >= total - 2;

    const handleMouseEnter = () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setDropdownPos({
                top: rect.bottom + window.scrollY,
                left: isRightAlign ? 'auto' : rect.left + window.scrollX,
                right: isRightAlign ? window.innerWidth - rect.right : 'auto',
            });
        }
        setIsOpen(true);
    };

    return (
        <li
            ref={ref}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsOpen(false)}
        >
            <span
                className={`block px-2 py-3 text-base uppercase font-medium cursor-pointer whitespace-nowrap border-b-2 transition-colors duration-150 ${
                    isOpen
                        ? 'text-blue-700 border-blue-700'
                        : 'text-gray-600 border-transparent hover:text-blue-700 hover:border-blue-700'
                }`}
            >
                {item.label}
            </span>

            {isOpen && (
                <div
                    className="fixed bg-white border border-gray-200 border-t-2 border-t-blue-700 shadow-xl z-[9999] rounded-b-lg p-6 flex gap-8"
                    style={{
                        top: dropdownPos.top,
                        left: isRightAlign ? 'auto' : dropdownPos.left,
                        right: isRightAlign ? dropdownPos.right : 'auto',
                        minWidth: 'max-content',
                    }}
                >
                    {item.columns.map((col, i) => (
                        <div key={i} className="min-w-[120px]">
                            <p className="text-sm font-semibold text-gray-900 mb-2 pb-2 border-b border-gray-200">
                                {col.title}
                            </p>
                            <ul className="space-y-2">
                                {col.items.map((link, j) => (
                                    <li key={j}>
                                        <Link
                                            to={`/shop?category=${link.slug}`}
                                            className="text-[12.5px] text-gray-500 hover:text-blue-700 transition-colors duration-100"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </li>
    );
};

const Navbar = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const [searchTrigger, { data: searchProducts }] = useLazySearchProductsQuery();

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

    const handleSearch = (e) => setSearch(e.target.value);

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
                            <div className="absolute top-full left-0 w-full bg-white shadow-2xl z-[9999] rounded-xl mt-1 border border-gray-100">
                                <div className="px-4 pt-4 pb-2">
                                    <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                                        Trending Products
                                    </p>
                                </div>
                                <div className="max-h-[340px] overflow-y-auto px-4 pb-4">
                                    <div className="grid grid-cols-3 gap-2">
                                        {searchProducts.products.map((item) => (
                                            <div
                                                key={item.id}
                                                onClick={() => {
                                                    setSearch("");
                                                    setShowDropdown(false);
                                                    navigate(`/shop/${item.id}`);
                                                }}
                                                className="border border-gray-100 rounded-xl p-2 cursor-pointer hover:border-gray-300 hover:shadow-sm transition-all text-center group"
                                            >
                                                <div className="bg-gray-50 group-hover:bg-gray-100 transition-colors rounded-lg h-[72px] flex items-center justify-center mb-2">
                                                    <img
                                                        src={item.thumbnail}
                                                        alt={item.title}
                                                        className="h-16 w-full object-contain"
                                                    />
                                                </div>
                                                <p className="text-[11px] font-medium truncate text-gray-800">
                                                    {item.title}
                                                </p>
                                                <p className="text-[11px] text-red-500 font-semibold mt-0.5">
                                                    ৳{item.price}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

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

                <div className="border-t border-gray-200 bg-white overflow-x-auto scrollbar-hide">
                    <div className="container">
                        <ul className="flex  gap-16 list-none m-0 p-0 w-max">
                            {menuData.map((item, index) => (
                                <MegaMenuItem
                                    key={index}
                                    item={item}
                                    index={index}
                                    total={menuData.length}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
