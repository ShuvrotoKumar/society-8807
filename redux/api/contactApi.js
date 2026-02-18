import { baseApi } from "./baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateContact: builder.mutation({
      query: ({ requestData }) => ({
        url: "/contact",
        method: "POST",
        body: requestData,
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const {
  useUpdateContactMutation,
} = contactApi;
