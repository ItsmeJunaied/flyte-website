import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  // baseUrl: process.env.NEXT_BASE_URL,
  baseUrl: "https://admin.flytesolutions.com/api",
  // prepareHeaders: (headers) => {
  //   const token = Cookies.get("accessToken");
  //   if (token) {
  //     headers.set("Authorization", `Bearer ${token}`);
  //   }
  //   return headers;
  // },
});

export const baseApi = createApi({
  baseQuery,
  tagTypes: ["HomeBanner", "Contact", "CaseStudies"],
  endpoints: () => ({}),
});
