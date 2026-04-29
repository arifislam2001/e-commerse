import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiservice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),
    endpoints: (build) => ({
        getProducts: build.query({
            query: ({ category, limit, skip }) => {
                return `/products${category ? `/category/${category}` : ""}?limit=${limit}&skip=${skip}`
            }
        }),
        getCategoryList: build.query({
            query: () => "/products/category-list",
        }),
        getProductDetails: build.query({
            query: (id) => `/products/${id}`,
        }),
        searchProducts: build.query({
            query: (search) => `/products/search?q=${search}`
        }),
        login: build.mutation({
            query: ({ data }) => ({
                url: `/auth/login`,
                method: 'POST',
                body: data,
            }),
        })
    }),
});

export const {
    useGetProductsQuery,
    useGetCategoryListQuery,
    useGetProductDetailsQuery,
    useLoginMutation,
    useLazySearchProductsQuery
} = apiservice