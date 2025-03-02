import { baseApi } from "./baseApi";

const commonApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get software solutions data
    getSoftwareSolutions: builder.query({
      query: () => "software-solution",
      providesTags: ["Common"],
    }),
  }),
});

export const { useGetSoftwareSolutionsQuery } = commonApi;
