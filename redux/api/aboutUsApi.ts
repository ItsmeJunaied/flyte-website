import { baseApi } from "./baseApi";

const aboutUsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get about-us data
    getAboutUs: builder.query({
      query: () => "aboutus",
      providesTags: ["About Us"],
    }),
  }),
});

export const { useGetAboutUsQuery } = aboutUsApi;