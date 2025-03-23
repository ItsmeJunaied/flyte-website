import { baseApi } from "./baseApi";

const footerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get footer data
    getFooter: builder.query({
      query: () => "init-system",
      providesTags: ["Footer"],
    }),
  }),
});

export const { useGetFooterQuery } = footerApi;