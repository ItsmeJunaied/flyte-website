import { baseApi } from "./baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all prducts
    getAllProducts: builder.query({
      query: () => "products",
      providesTags: ["Products"],
    }),

    // get all prducts
    getProduct: builder.query({
      query: (slug) => `product/${slug}`,
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;