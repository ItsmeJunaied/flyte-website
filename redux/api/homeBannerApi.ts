import { baseApi } from "./baseApi";

const homeBannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get home banner data
    getHomeBanner: builder.query({
      query: ({ page, pageSize, searchKey }) => ({
        url: "home-banner/all",
        params: { page, pageSize, searchKey },
      }),
      // transformResponse: (res) => res.data,
      providesTags: ["HomeBanner"],
    }),
  }),
});

export const { useGetHomeBannerQuery } = homeBannerApi;
