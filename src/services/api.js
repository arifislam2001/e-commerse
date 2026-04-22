import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiservice = createApi({
    baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  endpoints: (build)=>({
    getProducts : build.query({
        query : ({limit , skip})=> `/products?limit=${limit}&skip=${skip}`,
    }),
  }),
});

export const { useGetProductsQuery } = apiservice