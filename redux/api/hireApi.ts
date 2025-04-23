import { baseApi } from "./baseApi";

const commonApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get software solutions data
    getHireServices: builder.query({
      query: () => "service",
      providesTags: ["Hire"],
    }),

    // add hire service
    addtHireService: builder.mutation({
      query: (hireFormData) => ({
        url: "hire-service",
        method: "POST",
        body: hireFormData,
      }),
      invalidatesTags: ["Hire"],
    }),
  }),
});

export const { useGetHireServicesQuery, useAddtHireServiceMutation } = commonApi;