import { baseApi } from "./baseApi";

const caseStudiesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get specific case study
    getSpecificCaseStudy: builder.query({
      query: (slug) => `case-studies/${slug}`,
      providesTags: ["CaseStudies"],
    }),

    // get categroy based case studies
    getCategoryBasedCaseStudies: builder.query({
      query: ({ category_id, page = 1 }) => ({
        url: "case-studies",
        params: { category_id, page },
      }),
      providesTags: ["CaseStudies"],
    }),

    // get content and category of case studies
    getContentCategory: builder.query({
      query: () => `content-case-studies`,
      providesTags: ["CaseStudies"],
    }),
  }),
});

export const {
  useGetSpecificCaseStudyQuery,
  useGetCategoryBasedCaseStudiesQuery,
  useGetContentCategoryQuery,
} = caseStudiesApi;
