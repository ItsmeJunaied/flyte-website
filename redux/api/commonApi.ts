import { baseApi } from "./baseApi";

const commonApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get software solutions data
    getSoftwareSolutions: builder.query({
      query: () => "software-solution",
      providesTags: ["Common"],
    }),

    // get client feedback data
    getClientFeedback: builder.query({
      query: ({module}) => ({
        url: "client-feedback",
        params: { module },
      }),
      providesTags: ["Common"],
    }),
  }),
});

export const { useGetSoftwareSolutionsQuery, useGetClientFeedbackQuery } = commonApi;
