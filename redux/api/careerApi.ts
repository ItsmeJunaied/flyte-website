import { Opportunity } from "@/component/Career/CareerOpportunities";
import { baseApi } from "./baseApi";

// Define API Response Type
export type ApiResponse = {
  data: Opportunity[];
};

const careerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get career opportunities
    getAllCareerOpportunities: builder.query<ApiResponse, void>({
      query: () => "career",
      providesTags: ["Career"],
    }),

    // get career details
    getCareerDetails: builder.query({
      query: (slug) => `career/${slug}`,
      providesTags: ["Career"],
    }),
  }),
});

export const { useGetAllCareerOpportunitiesQuery, useGetCareerDetailsQuery } = careerApi;
