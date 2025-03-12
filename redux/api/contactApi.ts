import { baseApi } from "./baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // send contact data
    addContact: builder.mutation({
      query: (contactData) => ({
        url: "contact",
        method: "POST",
        body: contactData,
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const { useAddContactMutation } = contactApi;
