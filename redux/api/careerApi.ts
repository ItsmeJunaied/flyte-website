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
  }),
});

export const { useGetAllCareerOpportunitiesQuery } = careerApi;
