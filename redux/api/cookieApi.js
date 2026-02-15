import { baseApi } from "./baseApi";

const cookieApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCookiePolicy: builder.query({
      query: () => ({
        url: "/legal-docs/cookie-policy",
        method: "GET",
      }),
      providesTags: ["cookiePolicy"],
    }),
    updateCookiePolicy: builder.mutation({
      query: ({ requestData }) => ({
        url: "/legal-docs/cookie-policy",
        method: "PATCH",
        body: requestData,
      }),
      invalidatesTags: ["cookiePolicy"],
    }),
  }),
});

export const {
  useGetCookiePolicyQuery,
  useUpdateCookiePolicyMutation,
} = cookieApi;
