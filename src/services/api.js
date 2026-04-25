import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiservice = createApi({
    baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  endpoints: (build)=>({
    getProducts : build.query({
        query : ({category , limit , skip })=> {
         
          
          return `/products${category ? `/category/${category}` : ""}?limit=${limit}&skip=${skip}`
        }
    }),
    getCategoryList: build.query({
      query : () => "/products/category-list",
    }),
    getProductDetails : build.query({
      query : (id)=> `/products/${id}`,
    })
  }),
});

export const { useGetProductsQuery , useGetCategoryListQuery , useGetProductDetailsQuery} = apiservice