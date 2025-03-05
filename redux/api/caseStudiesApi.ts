import { baseApi } from "./baseApi";

const caseStudiesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get specific case study
    getSpecificCaseStudy: builder.query({
      query: (slug) => `case-studies/${slug}`,
      providesTags: ["CaseStudies"],
    }),

    // get all case studies
    getAllCaseStudies: builder.query({
      query: () => `content-case-studies`,
      providesTags: ["CaseStudies"],
    }),
  }),
});

export const { useGetSpecificCaseStudyQuery, useGetAllCaseStudiesQuery } = caseStudiesApi;
