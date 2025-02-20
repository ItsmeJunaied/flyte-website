import { baseApi } from "./baseApi";

const caseStudiesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get home banner data
    getAllCaseStudies: builder.query({
      query: (slug) => `case-studies/${slug}`,
      providesTags: ["CaseStudies"],
    }),
  }),
});

export const { useGetAllCaseStudiesQuery } = caseStudiesApi;