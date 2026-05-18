import React, { useEffect, useMemo, useState } from 'react'
import SelectInput from '../ui/Selectinput'
import ProductCard from '../ui/ProductCard'
import { Link, useSearchParams } from 'react-router-dom'
import { useGetCategoryListQuery, useGetProductsQuery } from '../services/api'
import { Pagination } from '../ui/Pagination'

const priceOptions = [
  { value: 'all', label: 'All prices' },
  { value: 'under50', label: 'Under $50' },
  { value: '50-100', label: '$50 – $100' },
  { value: '100-200', label: '$100 – $200' },
  { value: '200+', label: '$200+' },
  { value: '500+', label: '$500+' },
]

const Shop = () => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')

  const [limit, setLimit] = useState(30)
  const [pageNum, SetPageNum] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [priceRange, setPriceRange] = useState('all')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [priceOpen, setPriceOpen] = useState(false)

  const { data, isLoading, isFetching } = useGetProductsQuery({
    limit,
    skip: limit * (pageNum - 1),
    category,
  })
  const { data: categories } = useGetCategoryListQuery()

  useEffect(() => {
    if (data?.total) {
      setTotalPage(Math.ceil(data?.total / limit))
    }
  }, [data?.total, limit])

  const filteredProducts = useMemo(() => {
    const list = data?.products ?? []
    return list.filter((item) => {
      if (priceRange === 'all') return true
      if (priceRange === 'under50') return item.price < 50
      if (priceRange === '50-100') return item.price >= 50 && item.price <= 100
      if (priceRange === '100-200') return item.price >= 100 && item.price <= 200
      if (priceRange === '200+') return item.price > 200
      if (priceRange === '500+') return item.price > 500
      return true
    })
  }, [data?.products, priceRange])

  const sortoption = [
    { value: "10", label: "10" },
    { value: "30", label: "30" },
    { value: "50", label: "50" },
    { value: "80", label: "80" }
  ]

  return (
    <main className='py-12'>
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14">

        {/* Mobile filters toggle */}
        <div className="lg:hidden col-span-1 mb-4">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="w-full flex items-center justify-between gap-3 rounded-xl bg-white border border-gray-200 px-4 py-3 text-sm font-medium text-primary"
          >
            <span>Filters</span>
            <span className="text-secondary">{priceRange === 'all' ? '' : '•'}</span>
          </button>
        </div>

        {/* Mobile off-canvas */}
        <div
          className={`lg:hidden fixed inset-0 z-50 ${filtersOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
          aria-hidden={!filtersOpen}
        >
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity ${filtersOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setFiltersOpen(false)}
          />
          <div
            className={`absolute left-0 top-0 h-full w-[85%] max-w-[360px] bg-white shadow-xl transition-transform duration-300 ${
              filtersOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
              <h3 className='text-base font-medium text-primary'>Filters</h3>
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="text-sm font-semibold text-secondary"
              >
                ✕
              </button>
            </div>

            <div className="px-4 py-5 overflow-y-auto overflow-x-hidden h-[calc(100vh-64px)]">
              <h3 className='text-base font-medium text-primary'>Related Categories</h3>

              <div className='py-6 my-4 border-y-2 border-y-secondary/10'>
                <h3 className='text-base font-medium text-primary'>Price range</h3>

                {/* Custom dropdown - panel এর ভেতরে থাকবে */}
                <div className='relative w-full mt-3'>
                  <button
                    type='button'
                    onClick={() => setPriceOpen(!priceOpen)}
                    className='w-full flex items-center justify-between border border-gray-200 rounded px-2 py-1.5 text-xs text-secondary bg-white'
                  >
                    <span>{priceOptions.find(o => o.value === priceRange)?.label}</span>
                    <span className='text-gray-400 text-[10px]'>{priceOpen ? '▲' : '▼'}</span>
                  </button>

                  {priceOpen && (
                    <div className='absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-md z-10'>
                      {priceOptions.map((opt) => (
                        <button
                          type='button'
                          key={opt.value}
                          onClick={() => { setPriceRange(opt.value); setPriceOpen(false) }}
                          className={`w-full text-left px-3 py-2 text-xs hover:bg-gray-50 ${priceRange === opt.value ? 'text-blue-600 font-medium' : 'text-secondary'}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className='space-y-3 mt-4'>
                {categories?.map((item) => (
                  <Link
                    to={`/shop?category=${item}`}
                    key={item}
                    onClick={() => setFiltersOpen(false)}
                    className='hover:text-blue-600 block text-base text-secondary/90 capitalize'
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop sidebar */}
        <div className="col-span-1 lg:col-span-3 py-6 px-4 lg:px-5 bg-white h-fit lg:block hidden lg:sticky top-0 left-0">
          <h3 className='text-base lg:text-lg font-medium text-primary'>Related Categories</h3>

          <div className='py-6 lg:py-12 my-4 lg:my-6 border-y-2 border-y-secondary/10'>
            <h3 className='text-base lg:text-lg font-medium text-primary'>Price range</h3>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className='w-full mt-3 border border-gray-200 rounded px-3 py-2 text-sm text-secondary'
            >
              {priceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className='space-y-4 lg:space-y-5 mt-4'>
            {categories?.map((item) => (
              <Link to={`/shop?category=${item}`} key={item} className='hover:text-blue-600 block text-base text-secondary/90 capitalize'>
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className='col-span-1 lg:col-span-9'>
          <div className='flex flex-wrap items-center justify-between gap-4 mb-6'>
            <div className='w-full lg:w-auto'>
              <p className='font-medium text-sm lg:text-lg text-[#424241]/50'>
                Showing{' '}
                <span className='text-secondary'>
                  {data?.total ? limit * (pageNum - 1) + 1 : 0} –{' '}
                  {data?.total > limit * pageNum ? limit * pageNum : data?.total}
                </span>{' '}
                of <span className='text-secondary'>{data?.total}</span> product
              </p>
            </div>

            <div className='flex items-center gap-3 lg:gap-7 w-full lg:w-auto justify-between lg:justify-end'>
              <p className='whitespace-nowrap text-xs lg:text-base'>Display</p>
              <SelectInput
                className='max-w-14 lg:max-w-20 text-xs lg:text-sm'
                options={sortoption}
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
              />
            </div>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6'>
            {isLoading || isFetching
              ? Array(8).fill(0).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-lg mb-3"></div>
                  <div className="bg-gray-200 h-4 w-3/4 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                </div>
              ))
              : filteredProducts?.length === 0
                ? <p className='col-span-4 text-center text-gray-400 py-10'>No products found in this price range</p>
                : filteredProducts?.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))
            }
          </div>

          <Pagination
            handlechange={(num) => SetPageNum(num)}
            pageNum={pageNum}
            totalPage={totalPage}
          />
        </div>
      </div>
    </main>
  )
}

export default Shop