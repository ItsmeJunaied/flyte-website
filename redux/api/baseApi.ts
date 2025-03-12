import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
});

export const baseApi = createApi({
  baseQuery,
  tagTypes: ["HomeBanner", "Contact", "CaseStudies", "Common", "Career", "Blogs"],
  endpoints: () => ({}),
});
